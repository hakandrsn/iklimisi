import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  token: string;
  user: User;
}

type User = {
  fullname?: string;
  description?: string;
  age?: number;
  followers?: number;
  friends?: number;
  email?: string;
};

const initialState: UserState = {
  token: '',
  user: {
    fullname: '',
    age: 0,
    followers: 0,
    friends: 0,
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteToken: state => {
      state.token = '';
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, { payload }) => {
      state.user = {
        fullname: payload.fullname,
        email: payload.email,
        age: payload.age,
        followers: payload.followers,
        friends: payload.friends,
      };
    },
  },
});

export const { deleteToken, setToken, setUser } = userSlice.actions;

export default userSlice.reducer;
