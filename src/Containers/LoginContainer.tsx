import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const Login = () => {
  return (
    <View style={{ flex: 100, backgroundColor: 'white' }}>
      <View
        style={{
          flex: 30,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            width: '50%',
          }}
        >
          Already have an Account?
        </Text>
        <Image
          source={require('../Assets/Images/computer.png')}
          style={{
            tintColor: '#ED6263',
            width: 120,
            height: 120,
            alignSelf: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 30,
        }}
      >
        <View
          style={{
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: '#ED6263',
            }}
          >
            Email:
          </Text>
          <TextInput
            style={{
              color: 'black',
            }}
            placeholder="example@gmail.com"
          />
        </View>
      </View>
    </View>
  )
}

export default Login
