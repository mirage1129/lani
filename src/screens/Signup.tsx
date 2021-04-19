import React, {useLayoutEffect, useState} from 'react'
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { Input, Avatar } from 'react-native-elements'
import { COLORS } from '../constants'
import { StackNavigationProp } from '@react-navigation/stack'
import { supabase } from '../utils/request'
import {Controller, useForm, useWatch} from 'react-hook-form'

type UserType = {
  name: string,
  email: string,
  password: string,
  avatarURL?: string
}

type SignupProp = {
  navigation: StackNavigationProp<any, 'Signup'>
}

const Signup = ({navigation} : SignupProp) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const { control, handleSubmit, formState: { errors }} = useForm()
  const currentForm = useWatch({ control }) 

  // Handle header
  useLayoutEffect(() => {
    console.log(currentForm)
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => <SignUpButton handlePress={handleSubmit(handleSignupAction)} />
    })
  }, [navigation, currentForm])
  
  const handleSignupAction = async (data) => {
    let { user, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password
    })
    if (error) {
      setErrorMsg(error.message)
    }
    if(user) {
      navigation.navigate('Signup')
    }
  }

  const SignUpButton = (props) => {
    return (
      <TouchableOpacity onPress={() => props.handlePress(props.user)}>
        <Text style={{ color: 'white', paddingRight: 10, fontSize: 16 }}>Save</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
      <Avatar
        source={{
          uri:
            'https://www.w3schools.com/bootstrap4/paris.jpg',
        }}
        size='xlarge'
        rounded
      >
        <Avatar.Accessory 
          size={18}
          onPress={() => Alert.alert('Upload image')} />
      </Avatar>

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
              placeholder={'Name'}
              placeholderTextColor='#d1d1d1'
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              errorStyle={{ color: 'red'}}
              errorMessage={errors.name ? `can't be blank` : ''}
            />
          )}
          name="name"
          rules={{ required: true }}
        />
      </View>
      <View style={styles.inputView}>
        <Controller 
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <Input
              style={styles.inputField}
              placeholder={'email'}
              placeholderTextColor='#d1d1d1'
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              errorStyle={{ color: 'red'}}
              errorMessage={errors.name ? `can't be blank` : ''}
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
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)}
              secureTextEntry={true}
              errorStyle={{ color: 'red'}}
              errorMessage={errors.name ? `can't be blank` : ''}
            />
          )}
          name="password"
          rules={{ required: true }}
        />
      </View>
      <View style={{ alignContent: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>We'll send calendar invities to the email you provide</Text>
      </View>
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
    marginBottom: 0
  },
  logo: {
    resizeMode: 'contain',
  },
  inputView: {
    width: "100%",
  },
  inputField: {
    paddingLeft: 10,
    height: 50,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    paddingBottom: 20,
  }
})

export default Signup
