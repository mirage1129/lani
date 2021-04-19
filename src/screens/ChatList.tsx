import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { COLORS } from '../constants'
import { Avatar, Badge } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

type ChatListProp = {
  navigation: StackNavigationProp<any, 'ChatList'>
}

const ChatList = ({ navigation }: ChatListProp) => {

  const truncateMessage = (message: string, length?: number, ending?: string) => {
    if (length == undefined) {
      length = 60
    }

    if (ending == undefined) {
      ending = '...'
    }

    if (message.length > length) {
      return message.substring(0, length - ending.length) + ending
    }
    return message
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.actionArea}>
        <Text style={styles.actionBase}>Archive</Text>
        <Text style={[styles.actionBase, styles.groupAction]}>Groups</Text>
      </View>

      <View style={styles.body}>
        <FlatList
          nestedScrollEnabled
          data={[
            { groupName: 'Marta Baby shower', groupAvatar: '/', key: '1', latestMessage: { time: '2:24 PM', read: true, sender: 'Zack', content: 'abc', totalUnread: 0 } },
            { groupName: 'Birthday dinaaaaa', groupAvatar: '/', key: '2', latestMessage: { time: '2:24 PM', read: false, sender: 'Zack', content: 'abc', totalUnread: 5 } },
            { groupName: 'Beach voleyball', groupAvatar: '/', key: '3', latestMessage: { time: '1:15 AM', read: true, sender: 'Anish', content: 'Yeah I have extra too!!! this is a long long message will be truncated', totalUnread: 0 } },
            { groupName: 'Marta Baby shower', groupAvatar: '/', key: '4', latestMessage: { time: '2:24 PM', read: true, sender: 'Zack', content: 'abc', totalUnread: 0 } },
          ]}
          renderItem={({ item }) =>
            <TouchableOpacity activeOpacity={1} key={item.key} style={styles.groupMessages} onPress={() => navigation.navigate('Chat')}>
              <View style={styles.groupAvatar}>
                <Avatar
                  rounded
                  source={{ uri: item.groupAvatar }}
                  size={60}
                />
              </View>

              <View style={styles.groupInfo}>
                <Text style={{ fontWeight: '400', fontSize: 16 }}>{item.groupName}</Text>
                <View style={styles.grouplatestMessage}>
                  {item.latestMessage.read &&
                    <Ionicons name='checkmark-done' size={24} color='#1bc47d' />
                  }
                  <Text style={{ color: '#a0a5a9' }}>{item.latestMessage.sender}: {truncateMessage(item.latestMessage.content)}</Text>
                </View>
              </View>

              <View style={styles.groupExtra}>
                <Text style={{ color: '#a0a5a9' }}>{item.latestMessage.time}</Text>
                {item.latestMessage.totalUnread > 0 &&
                  <Badge status='error' value={item.latestMessage.totalUnread} />
                }
              </View>
            </TouchableOpacity>
          }
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backGroundColor,
  },
  body: {
    flex: 10.3,
    backgroundColor: 'white',
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
  groupAction: {
    marginRight: 10,
  },
  groupMessages: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  groupAvatar: {
    flex: 0.15,
    paddingHorizontal: 10,
  },
  groupInfo: {
    flex: 0.7,
    flexDirection: 'column',
  },
  grouplatestMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupExtra: {
    flex: 0.15,
    flexDirection: 'column',
  }
})

export default ChatList
