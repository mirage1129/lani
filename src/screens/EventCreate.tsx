import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, TextInput, Switch } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { format } from 'date-fns'
import { ScrollView } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack'

type EventCreateProp = {
  navigation: StackNavigationProp<any, 'Create Event'>
}

const EventCreate = ({ navigation }: EventCreateProp) => {
  const [date, setDate] = React.useState(new Date())
  const [dateShow, setDateShow] = React.useState(false)

  const [startTime, setStartTime] = React.useState(new Date())
  const [startTimeShow, setStartTimeShow] = React.useState(false)

  const [endTime, setEndTime] = React.useState(new Date())
  const [endTimeShow, setEndTimeShow] = React.useState(false)

  const [allowGuestsInviteFriend, setAllowGuestsInviteFriend] = React.useState(true)
  const [allowRSVP, setAllowRSVP] = React.useState(false)

  const onDateChange = (event: any, selectedDate: any) => {
    setDate(selectedDate)
    setDateShow(false)
  }

  const onStartTimeChange = (event: any, selectedTime: any) => {
    setStartTime(selectedTime)
    setStartTimeShow(false)
  }

  const onEndTimeChange = (event: any, selectedTime: any) => {
    setEndTime(selectedTime)
    setEndTimeShow(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.actionArea}>
          <Text style={styles.actionBase} onPress={() => navigation.navigate('Event')}>Cancel</Text>
          <Text style={[styles.actionBase, styles.createAction]} onPress={() => navigation.navigate('Event Detail')}>Create</Text>
        </View>

        <View style={styles.InputArea}>
          <TextInput
            style={styles.eventNameInput}
            placeholder='Event Name'
          />

          <TextInput
            editable={false}
            style={styles.eventNameInput}
            value={format(date, 'dd / M / yyyy')}
            onTouchStart={() => setDateShow(true)}
          />

          {dateShow &&
            <DateTimePicker
              style={{ width: '100%' }}
              value={date}
              mode='date'
              display='inline'
              onChange={onDateChange}
            />
          }

          <View style={styles.groupInput}>
            <TextInput
              editable={false}
              placeholder='Start time'
              style={styles.startTimeInput}
              value={format(startTime, 'HH:mm')}
              onTouchStart={() => setStartTimeShow(true)}
            />

            <Text style={{ fontSize: 24 }}>to</Text>

            <TextInput
              editable={false}
              placeholder='End time'
              style={styles.endTimeInput}
              value={format(endTime, 'HH:mm')}
              onTouchStart={() => setEndTimeShow(true)}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            {startTimeShow &&
              <DateTimePicker
                style={{ width: 100, marginLeft: -10 }}
                value={startTime}
                mode='time'
                display='spinner'
                onChange={onStartTimeChange}
              />
            }

            {endTimeShow &&
              <DateTimePicker
                style={{ width: 100, marginLeft: -10 }}
                value={endTime}
                mode='time'
                display='spinner'
                onChange={onEndTimeChange}
              />
            }
          </View>

          <TextInput
            style={styles.eventNameInput}
            placeholder='Location'
          />

          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.areaInput}
            placeholder='Tell people more...'
          />

          <View style={styles.guestsInviteFriends}>
            <TextInput
              style={styles.eventNameInput}
              placeholder='Guests can invite friends'
              editable={false}
            />

            <View style={styles.switchToggle}>
              <Switch
                value={allowGuestsInviteFriend}
                onValueChange={() => setAllowGuestsInviteFriend(!allowGuestsInviteFriend)}
                trackColor={{ true: '#34c759', false: '#e9e9ea' }}
              />
            </View>
          </View>

          <TextInput
            style={styles.eventNameInput}
            placeholder='Attendee limit'
            keyboardType='numeric'
          />

          <View style={styles.guestsInviteFriends}>
            <TextInput
              style={styles.eventNameInput}
              placeholder='RSVP cut off date'
              editable={false}
            />

            <View style={styles.switchToggle}>
              <Switch
                value={allowRSVP}
                onValueChange={() => setAllowRSVP(!allowRSVP)}
                trackColor={{ true: '#34c759', false: '#e9e9ea' }}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06899f'
  },
  actionArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#06899f',
  },
  InputArea: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  actionBase: {
    color: 'white',
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  createAction: {
    marginRight: 10,
  },
  eventNameInput: {
    height: 50,
    fontSize: 24,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  groupInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  startTimeInput: {
    fontSize: 24,
    marginRight: 10,
  },
  endTimeInput: {
    fontSize: 24,
    marginLeft: 10
  },
  areaInput: {
    height: 200,
    fontSize: 24,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  guestsInviteFriends: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  switchToggle: {
    alignSelf: 'center',
  }
})

export default EventCreate
