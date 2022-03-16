import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Keyboard, FlatList, ScrollView } from 'react-native'

const Register = () => {
    //states for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //states to store email/password
    const [email, setEmail] = useState('baluu8njdf@gmail.com')
    const [password, setPassword] = useState('123456Abc')
    return (

        <ScrollView style={{ flex: 100, backgroundColor: 'white' }}>
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
                        user:
                    </Text>
                    <TextInput
                        onChangeText={(text) => {
                            //  setErrorEmail(isValidEmail(text) == true ? 
                            //               '' : 'Email not in correct format')
                            setEmail(text)
                        }}
                        style={{
                            color: 'black',
                        }}
                        placeholder="example@gmail.com"
                    />

                    <View
                        style={{
                            height: 1,
                            backgroundColor: '#ED6263',
                            width: '100%',
                            marginHorizontal: 15,
                            marginBottom: 15,
                            alignSelf: 'center',
                        }}
                    />
                    <Text
                        style={{
                            color: 'red',
                            fontSize: 12,
                            marginBottom: 15,
                        }}
                    ></Text>
                </View>
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
                        onChangeText={(text) => {
                            //  setErrorEmail(isValidEmail(text) == true ? 
                            //               '' : 'Email not in correct format')
                            setEmail(text)
                        }}
                        style={{
                            color: 'black',
                        }}
                        placeholder="example@gmail.com"
                    />

                    <View
                        style={{
                            height: 1,
                            backgroundColor: '#ED6263',
                            width: '100%',
                            marginHorizontal: 15,
                            marginBottom: 15,
                            alignSelf: 'center',
                        }}
                    />
                    <Text
                        style={{
                            color: 'red',
                            fontSize: 12,
                            marginBottom: 15,
                        }}
                    ></Text>
                </View>
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
                        Password:
                    </Text>
                    <TextInput
                        style={{
                            color: 'black',
                        }}
                        secureTextEntry={true}
                        placeholder="Enter your password"
                        placeholderTextColor="rgba(0,0,0,0.6)"
                    />
                    <View
                        style={{
                            height: 1,
                            backgroundColor: '#ED6263',
                            width: '100%',
                            marginBottom: 15,
                            marginHorizontal: 15,
                            alignSelf: 'center',
                        }}
                    />
                    <Text
                        style={{
                            color: 'red',
                            fontSize: 12,
                            marginBottom: 15,
                        }}
                    >
                    </Text>
                </View>
            </View>
            <View style={{
                flex: 15
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#ED6263',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '50%',
                        alignSelf: 'center',
                        borderRadius: 18
                    }}>
                    <Text style={{
                        padding: 8,
                        fontSize: 14,
                        color: 'white'
                    }}>Register</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Register
