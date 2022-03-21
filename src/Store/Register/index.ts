import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index';

export interface RegisterInterface {
    user: string;
    email: string;
    password: string;
  }
  export interface RegisterState {
    login: RegisterInterface[];
    message: string;
    isLoading: boolean;
  }
  export const initialState: RegisterState = {
    login: [],
    message: '',
    isLoading: false,
  };

const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
})


export const selectLogin = (state: RootState) => state;
const { reducer: registerReducer } = RegisterSlice;
export default registerReducer;