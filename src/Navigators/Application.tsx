import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Login, StartupContainer } from '@/Containers'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import Register from '@/Containers/RegisterContainer'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  // const { Layout, darkMode, NavigationTheme } = useTheme()

  return (
    <SafeAreaView >
      <NavigationContainer  ref={navigationRef}>
        <StatusBar  />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
