import { StackNavigationProp } from '@react-navigation/stack'
import React, {useState} from 'react'
import { Controller, useForm } from 'react-hook-form'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { Input } from 'react-native-elements'
import { COLORS, images } from '../constants'
import { supabase } from '../utils/request'

type RootStackParamList = {
  Login: undefined
  Event: undefined
}

type LoginProp = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>
}

const Login = ({navigation}: LoginProp) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const { control, handleSubmit, formState: { errors }} = useForm()

  const handleLogin = async (data) => {
    let { user, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password
    })
    if (error) {
      setErrorMsg(error?.message)
    } 
    if (user) {
      navigation.navigate('Event')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={images.logo} />
      </View>
      { errorMsg != '' &&
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      }
      <View style={[ styles.inputView]}>
        <Controller 
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <Input
              style={styles.inputField}
              placeholder={'Email/Username'}
              placeholderTextColor='#d1d1d1'
              keyboardType={'email-address'}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              errorStyle={{ color: 'red'}}
              errorMessage={errors.email ? `can't be blank` : ''}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
      </View>

      <View style={styles.inputView}>
        <Controller 
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <Input
              style={styles.inputField}
              placeholder={'Password'}
              placeholderTextColor='#d1d1d1'
              secureTextEntry={true}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              errorStyle={{ color: 'red'}}
              errorMessage={errors.email ? `can't be blank` : ''}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
      </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={handleSubmit(handleLogin)}
        >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backGroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  logoView: {
    marginBottom: 20
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
  },
  inputView: {
    width: "100%",
    marginBottom: 20,
  },
  inputField: {
    borderRadius: 6,
    paddingLeft: 10,
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    color: 'white',
  },
  loginBtn: {
    width: "90%",
    borderRadius: 6,
    height: 50,
    backgroundColor: "#2196f3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },
  loginText: {
    color: "#fff"
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    paddingBottom: 20,
  }
})

export default Login
