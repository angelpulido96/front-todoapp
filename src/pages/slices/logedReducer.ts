import { Loged } from "@/interfaces/loged";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../store/index'

const initialState: Loged = {
  id: '',
  name: '',
  firstLastName: '',
  secondLastName: '',
  cellphone: '',
  email: '',
  avatar: ''
}

export const logedSlice = createSlice({
  name: "loged",
  initialState: initialState,
  reducers: {
    setLoged: (state, action) => {
      const { id, name, firstLastName, secondLastName, cellphone, email, avatar } = action.payload
      state.id = id
      state.name = name
      state.firstLastName = firstLastName
      state.secondLastName = secondLastName
      state.cellphone = cellphone
      state.email = email
      state.avatar = avatar
    },
    clearLoged: (state) => {
      state.id = ''
      state.name = ''
      state.firstLastName = ''
      state.secondLastName = ''
      state.cellphone = ''
      state.email = ''
      state.avatar = ''
    },
  },
});

export const selectLoged = (state: RootState) => state.loged

export const {
  reducer,
  actions: { setLoged, clearLoged },
} = logedSlice
