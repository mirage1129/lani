import React from 'react'
import {FlatList, StyleSheet, Switch, Text, View} from 'react-native'
import {Avatar, Divider} from 'react-native-elements'
import {ifIphoneX} from 'react-native-iphone-x-helper'
import {SIZES} from '../constants'

interface SettingType {
  id: string,
  name: string,
  value: boolean
}


const Setting = () => {

  const renderItem = ({item}: { item: SettingType }) => {
    return (
      <View style={styles.listItem}>
        <Text style={[styles.listFont, { flex: 3 }]}>{item.name}</Text>
        <Switch style={{ flex: 1, alignItems: 'center' }} value={item.value} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarBox}>
        <Avatar
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          size='xlarge'
          rounded
        />
        <Text style={styles.avatarName}>Meraj Qazi</Text>
      </View>
      <Divider style={{ backgroundColor: 'blue' }} />
      <View style={styles.personInfo}>
        <View style={[styles.listView]}>
          <Text style={styles.listFont}>Email</Text>
          <Text style={[styles.listFont, { paddingLeft: 40 }]}>meraij.a.quazi@gmail.com</Text>
        </View>
        <View style={[styles.listView, styles.listBorderTop, { borderBottomColor: '#ccc', borderBottomWidth: 1 }]}>
          <Text style={[styles.listFont, { flex: 1}]}>Chat notifications</Text>
          <Switch style={{ flex: 1 }} value={true} />
        </View>
      </View>
      <View style={styles.nofitication}>
        <View style={[styles.listView, { backgroundColor: '#e0e0e0', borderBottomWidth: 2, borderBottomColor: '#ccc'} ]}>
          <Text style={{ fontSize: SIZES.h2, fontWeight: '600' }}>Notifications</Text>
        </View>
        <FlatList
          data={[ 
            { id: '1', name: 'Chat notifications', value: true}, 
            { id: '2', name: 'Reminder 1 day before event', value: false},
            { id: '3', name: 'Reminder 3 days before event', value: true}
          ]}
          style={{ width: '100%'}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...ifIphoneX({
      paddingTop: 50
    }, {
      paddingTop: 30
    }),
  },
  avatarBox: {
    flex: 3,
    alignItems: 'center',
    width: '100%',
  },
  listView: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    flexWrap: 'wrap',
  },
  listFont: {
    fontSize: 18
  },
  listBorderTop: {
    borderTopColor: '#d6d6d6',
    borderTopWidth: 1
  },
  avatarName: {
    alignContent: 'center',
    marginTop: 15,
    fontSize: SIZES.h2,
    fontWeight: '600'
  },
  personInfo: {
    flex: 2,
    alignItems: 'flex-start',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'column',
    width: '100%',
  },
  nofitication: {
    flex: 5,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
  },
  listItem: {
    padding: 15, 
    flexDirection: 'row', 
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6'
  }
})

export default Setting
