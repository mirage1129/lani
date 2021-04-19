import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { COLORS } from '../constants'
import { StackNavigationProp } from '@react-navigation/stack'
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'

type EventDetailProp = {
  navigation: StackNavigationProp<any, 'Event Detail'>
}

const EventDetail = ({ navigation }: EventDetailProp) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Ionicons name='chevron-back' size={39} color="white" onPress={() => navigation.navigate('Event')}/>
      </View>

      <View style={[styles.baseArea, styles.detailArea]}>
        <View style={styles.dateTime}>
          <View style={{ flex: 0.5, paddingVertical: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 40 }}>15</Text>
            <Text style={{ color: '#06899f', fontWeight: '600' }}>Mar</Text>
          </View>

          <View style={{ flex: 1.5, paddingVertical: 35, alignItems: 'flex-start' }}>
            <Text style={{ fontWeight: '600' }}>Dance Rehearsal</Text>
            <Text style={{ marginTop: 7 }}>Mon 06:00pm - China Town</Text>
          </View>
        </View>
      </View>

      <View style={[styles.baseArea, styles.actionArea]}>
        <View style={styles.action}>
            <View style={styles.actionBox}>
              <MaterialIcons name='edit' size={26} color='#333' onPress={() => navigation.navigate('Create Event')} />
              <Text style={styles.actionTitle} onPress={() => navigation.navigate('Create Event')}>Edit</Text>
            </View>

            <View style={styles.actionBox}>
              <Ionicons name='mail-outline' size={26} color='#333' onPress={() => navigation.navigate('Invite List')} />
              <Text style={styles.actionTitle} onPress={() => navigation.navigate('Invite List')}>Invite</Text>
            </View>

            <View style={styles.actionBox}>
              <AntDesign name='close' size={26} color='#333' onPress={() => navigation.navigate('Event')} />
              <Text style={styles.actionTitle} onPress={() => navigation.navigate('Event')}>Cancel</Text>
            </View>
          </View>
      </View>

      <View style={[styles.baseArea, styles.moreInfoArea]}>
        <Ionicons name='ios-location-sharp' size={26} color='#333' style={{ flex: 0.3, textAlign: 'center' }}/>
        <Text style={{ flex: 1.7 }}>20 Balaguru, #02-01, Singapore 0382822</Text>
      </View>

      <View style={[styles.baseArea, styles.moreInfoArea]}>
        <View style={{ flex: 0.3 }}>
          <Avatar
            rounded
            containerStyle={{ alignSelf: 'center' }}
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
          />
        </View>
        <Text style={{ flex: 1.7 }}>Hosted by Merja Qazi</Text>
      </View>

      <View style={[styles.baseArea, styles.moreInfoArea]}>
        <Text style={{ flex: 0.3, fontSize: 26, textAlign: 'center' }}>0</Text>
        <Text style={{ flex: 1.7 }}>people are invited</Text>
      </View>

      <View style={styles.descriptionArea}>
        <Text>Hey y'all, its time of the year again CHINESE NEW YEAR!!!</Text>
        <Text>We will be starting our pratice sessions this week and then will do our final sections.</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backGroundColor,
  },
  baseArea: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  detailArea: {
    paddingHorizontal: 40,
  },
  actionArea: {
    paddingVertical: 40,
  },
  dateTime: {
    flexDirection: 'row',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  actionBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTitle: {
    color: '#06899f',
  },
  moreInfoArea: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 15,
    alignItems: 'center',
  },
  descriptionArea: {
    minHeight: 300,
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingVertical: 15,
  }
})

export default EventDetail
