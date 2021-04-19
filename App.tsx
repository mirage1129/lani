import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import Tabs from './src/components/Tabs'
import { COLORS } from './src/constants'
import {
  EventCreate,
  EventDetail,
  Login,
  Reminder,
  Auth,
  Signup,
  InviteList,
  InviteGroupList,
  NewGroupList,
  ChatList,
  Chat,
  Setting
} from './src/screens'
import { supabase } from './src/utils/request'

const Stack = createStackNavigator()
const UnAuthStack = createStackNavigator()

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setTimeout(async() => {
      const userData = supabase.auth.user()
      console.log(userData)
      setUser(userData)
      if (userData == null || userData == undefined) {

      }
    }, 1000)
  }, [])

  return (
    <>
    { user ?
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Event' component={Tabs} />
          <Stack.Screen name='Create Event' component={EventCreate} />
          <Stack.Screen name='Event Detail' component={EventDetail} />
          <Stack.Screen name='Reminder' component={Reminder} />
          <Stack.Screen name='Invite List' component={InviteList} />
          <Stack.Screen name='Invite Group List' component={InviteGroupList} />
          <Stack.Screen name='New Group List' component={NewGroupList} />
          <Stack.Screen name='Chat List' component={ChatList} />
          <Stack.Screen name='Chat' component={Chat} />
          <Stack.Screen name='Setting' component={Setting}/>
        </Stack.Navigator>
      </NavigationContainer>
    :
      <NavigationContainer>
        <UnAuthStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.backGroundColor,
              shadowColor: 'transparent',
            },
            headerTintColor: 'white'
          }}
        >
          <UnAuthStack.Screen
            options={{ headerShown: false }} 
            name="Auth" 
            component={Auth} />
          <UnAuthStack.Screen name="Login" component={Login} />
          <UnAuthStack.Screen 
            name="Signup"
            component={Signup} 
          />
          <UnAuthStack.Screen name='Event' component={Tabs} />
        </UnAuthStack.Navigator>
      </NavigationContainer>
    }
    </>
  )
}
