import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index';
import { register } from './register';

export interface RegisterInterface {
  username: string;
  email: string;
  password: string;
}
export interface RegisterState {
  register: RegisterInterface[];
  message: string;
  isLoading: boolean;
}
export const initialState: RegisterState = {
  register: [],
  message: '',
  isLoading: false,
};
export const handleRegister = createAsyncThunk(
  'register',
  async (data: any, { rejectWithValue }) => {
    try {
      const res: any = await register(data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleRegister.pending, state => { });
    builder.addCase(handleRegister.fulfilled, (state, { payload }) => {
      console.log("ok");
    });
    builder.addCase(handleRegister.rejected, (state, action: any) => {
      state.isLoading = false;
      state.message = action.error.message;
    });
  },
})


export const selectRegister = (state: RootState) => state;
const { reducer: registerReducer } = RegisterSlice;
export default registerReducer;