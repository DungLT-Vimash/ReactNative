import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Login } from '@/Containers'

const Tab = createBottomTabNavigator()

// @refresh reset
const LoginNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default LoginNavigator
