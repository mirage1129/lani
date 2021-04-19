import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { COLORS } from '../constants'
import { StackNavigationProp } from '@react-navigation/stack'
import { Avatar } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'

type NewGroupListProp = {
  navigation: StackNavigationProp<any, 'New Group List'>
}

const NewGroupList = ({ navigation }: NewGroupListProp) => {
  const participants = [
    {
      id: '123',
      name: 'Ayub',
      avatar: '/'
    },
    {
      id: '324',
      name: 'Britany',
      avatar: '/'
    },
    {
      id: '321423',
      name: 'Cher',
      avatar: '/'
    },
    {
      id: '324242',
      name: 'Dan',
      avatar: '/'
    },
    {
      id: '93293',
      name: 'Frank',
      avatar: '/'
    },
    {
      id: '428900',
      name: 'Gary',
      avatar: '/'
    },
    {
      id: '0990',
      name: 'Hisako',
      avatar: '/'
    },
    {
      id: '03922',
      name: 'Idris',
      avatar: '/'
    },
    {
      id: '3242421',
      name: 'Dan',
      avatar: '/'
    },
    {
      id: '93293555',
      name: 'Frank',
      avatar: '/'
    },
    {
      id: '42890044',
      name: 'Gary',
      avatar: '/'
    },
    {
      id: '099033',
      name: 'Hisako',
      avatar: '/'
    },
    {
      id: '039222',
      name: 'Idris',
      avatar: '/'
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actionArea}>
        <Text style={styles.actionBase} onPress={() => navigation.navigate('Invite Group List')}>Cancel</Text>
        <Text style={[styles.actionBase, styles.nextAction]} onPress={() => navigation.navigate('Invite List')}>Next</Text>
      </View>

      <View style={styles.bodyArea}>
        <View style={styles.groupName}>
          <Avatar
            rounded
            size={100}
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
          />

          <TextInput
            placeholder='Group Name'
            style={styles.groupNameInput}
          />
        </View>

        <Text style={styles.participantTitle}>
          Participants
        </Text>

        <View style={styles.participantArea}>
          {participants.map((participant, index) =>
            <View style={styles.participantInfo} key={participant.id}>
              <View style={styles.participantAvatar}>
                <Avatar
                  rounded
                  size={50}
                  source={{ uri: participant.avatar }}
                />
              </View>
              <Text style={styles.participantName}>{participant.name}</Text>
            </View>
          )}
        </View>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backGroundColor
  },
  actionArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#06899f',
  },
  actionBase: {
    color: 'white',
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  nextAction: {
    marginRight: 10,
  },
  bodyArea: {
    backgroundColor: 'white',
  },
  groupName: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 30,
  },
  groupNameInput: {
    fontSize: 20,
    marginTop: 5,
    height: 40
  },
  participantTitle: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingLeft: 15,
    fontSize: 17,
  },
  participantArea: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  participantInfo: {
    flexDirection: 'column',
    width: '25%',
    padding: 15,
  },
  participantName: {
    marginTop: 5,
    textAlign: 'center',
  },
  participantAvatar: {
    alignSelf: 'center',
  }
})

export default NewGroupList
