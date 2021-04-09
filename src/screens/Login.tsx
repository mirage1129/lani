import React, {useState} from 'react'
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {useRequest} from '../utils/request'

const Login = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleLogin = (email: string, password: string) => {
    const request = useRequest() 

  }

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
      </View>
      { errorMsg != '' &&
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      }
      <View style={[ styles.inputView]}>
        <TextInput
          style={styles.inputField}
          placeholder={'Email/Username'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputField}
          placeholder={'Password'}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleLogin(email, password)}
        >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06899f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoView: {
    marginBottom: 40
  },
  logo: {
    resizeMode: 'contain',
    height: 110,
  },
  inputView: {
    width: "90%",
    marginBottom: 20,
  },
  inputField: {
    borderRadius: 6,
    paddingLeft: 10,
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    color: '#495057'
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
