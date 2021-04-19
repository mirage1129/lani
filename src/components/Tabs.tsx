import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../constants'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { ChatList, Event, Setting } from '../screens'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          height: 60,
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: COLORS.backGroundColor
        }
      }}
    >
      <Tab.Screen
        name="Event"
        component={Event}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.footerBox}>
              <AntDesign name='calendar' size={26} color={focused? 'white' : '#d1d1d1'} />
              <Text style={[styles.footerBoxTitle, { color: focused ? 'white' : '#d1d1d1'}]}>Events</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat List"
        component={ChatList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.footerBox}>
              <Ionicons name='chatbox-outline' size={26} color={focused? 'white' : '#d1d1d1'} />
              <Text style={[styles.footerBoxTitle, { color: focused ? 'white' : '#d1d1d1'}]}>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.footerBox}>
              <AntDesign name='setting' size={26} color={focused? 'white' : '#d1d1d1'} />
              <Text style={[styles.footerBoxTitle, { color: focused ? 'white' : '#d1d1d1'}]}>Setting</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
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

export default Tabs
