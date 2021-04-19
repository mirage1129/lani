import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { images, COLORS, SIZES } from '../constants'

type RootStackParamList = {
  Auth: undefined
  Login: undefined
  Signup: undefined
}

type AuthProp = {
  navigation: StackNavigationProp<RootStackParamList, 'Auth'>
}

const Auth = ({navigation}: AuthProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={images.logo} />
      </View>
      <TouchableOpacity 
        style={[styles.authBtn, styles.signUpBtn]}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.authBtn, styles.loginBtn]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login in</Text>
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
    fontSize: SIZES.font
  },
  logoView: {
    marginBottom: 40
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
  },
  authBtn: {
    width: "60%",
    borderRadius: 6,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  signUpBtn: {
    backgroundColor: '#ab003c'
  },
  signUpText: {
    fontSize: SIZES.h5,
    color: 'white'
  },
  loginBtn: {
    backgroundColor: 'white'
  },
  loginText: {
    fontSize: SIZES.h5,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    paddingBottom: 20,
  }
})

export default Auth
