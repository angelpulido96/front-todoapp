import { User } from "@/interfaces/user";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../store/index'

const initialState: User = {
  name: '',
  firstLastName: '',
  secondLastName: '',
  cellphone: '',
  email: '',
  password: '',
  confirmPassword: '',
  avatar: ''
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, firstLastName, secondLastName, cellphone, email, password, confirmPassword, avatar } = action.payload;
      state.name = name
      state.firstLastName = firstLastName
      state.secondLastName = secondLastName
      state.cellphone = cellphone
      state.email = email
      state.password = password
      state.confirmPassword = confirmPassword
      state.avatar = avatar
    },
    clearUser: (state) => {
      state.name = ''
      state.firstLastName = ''
      state.secondLastName = ''
      state.cellphone = ''
      state.email = ''
      state.password = ''
      state.confirmPassword = ''
      state.avatar = ''
    },
  },
});

export const selectUser = (state: RootState) => state.user

export const {
  reducer,
  actions: { setUser, clearUser },
} = userSlice
