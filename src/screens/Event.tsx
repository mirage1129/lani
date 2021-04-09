import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const Event = () => {

  const handleCreateEvent = () => {
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => handleCreateEvent()}>
        <View style={styles.header}>
          <Text style={styles.eventButton}>Create Event</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.body}>
        <View style={styles.bodyTop}>
          <View style={styles.bodyTopPendingView}>
            <Text style={styles.bodyTopPendingTitle}>Pending</Text>
          </View>

          <FlatList
            data={[
              { eventName: 'Marta Baby shower', key: 1 },
              { eventName: 'Nerd dinner', key: 2 }
            ]}
            renderItem={({ item }) =>
              <View>
                <Text>{item.eventName}</Text>
              </View>
            }
          />
        </View>

        <View style={styles.bodyBottom}>
          <View style={styles.bodyBottomTitle}>
            
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerBox}>
          <AntDesign name='calendar' size={26} color='white' />
          <Text style={styles.footerBoxTitle}>Events</Text>
        </View>

        <View style={styles.footerBox}>
          <Ionicons name='chatbox-outline' size={26} color='white' />
          <Text style={styles.footerBoxTitle}>Chat</Text>
        </View>

        <View style={styles.footerBox}>
          <AntDesign name='setting' size={26} color='white' />
          <Text style={styles.footerBoxTitle}>Settings</Text>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06899f',
  },
  eventButton: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#fff',
    marginTop: 35,
    height: 55,
    width: 200,
    justifyContent: 'center',
    borderRadius: 50,
    alignSelf: 'center'
  },
  body: {
    flex: 9,
    backgroundColor: 'white',
    marginTop: 30
  },
  bodyTop: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyTopPendingView: {
    padding: 10,
    borderStyle: 'solid',
    borderBottomColor: '#06899f',
    borderBottomWidth: 2,
  },
  bodyTopPendingTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  bodyBottom: {
    flex: 1,
    backgroundColor: 'green',
  },
  bodyBottomTitle: {
    //
  },
  footer: {
    flex: 1.2,
    flexDirection: 'row',
    backgroundColor: '#06899f',
    justifyContent: 'space-evenly',
  },
  footerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerBoxTitle: {
    color: 'white',
    fontWeight: '600'
  },
})

export default Event
