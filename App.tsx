import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, {useState} from 'react'
import {Event, Login} from './src/screens';

const Stack = createStackNavigator()
const UnAuthStack = createStackNavigator()

export default function App() {
  const [userToken, setUserToken] = useState<string | null>(null)

  return (
    <>
    { userToken !== null ? 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Event' component={Event} />
        </Stack.Navigator>
      </NavigationContainer>
    :
      <NavigationContainer>
        <UnAuthStack.Navigator>
          <UnAuthStack.Screen name="Login" component={Login} />
        </UnAuthStack.Navigator>
      </NavigationContainer>
    }
    </>
  )
}
