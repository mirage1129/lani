import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Reminder = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name='close' size={35} color='#ddd' style={styles.closeReminder} />

      <Text style={styles.title}>Reminder</Text>

      <Text style={styles.content}>Birthday dinnaaaaaaaaa</Text>

      <Text style={styles.time}>Tomorrow at 07:00pm</Text>
      <Text style={styles.location}>Maxwell Food Centre</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06899f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: 'white',
    marginTop: 50,
    fontSize: 20,
  },
  closeReminder: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  location: {
    color: 'white',
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontSize: 40
  },
  time: {
    color: 'white',
    fontSize: 20,
    marginTop: 50
  }
})

export default Reminder
