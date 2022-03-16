import { AsyncStorage } from 'react-native';

export const saveToken = async (refreshToken: string, token: string) => {
  await AsyncStorage.setItem('refreshToken', refreshToken);
  await AsyncStorage.setItem('token', token);
};

