import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { COLORS } from '../constants/theme'
import { Ionicons } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'

type ChatProp = {
  navigation: StackNavigationProp<any, 'Chat'>
}

const Chat = ({ navigation }: ChatProp) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Ionicons name='chevron-back' size={39} color="white" onPress={() => navigation.navigate('Chat List')}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backGroundColor,
  },
})

export default Chat
