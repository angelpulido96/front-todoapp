import { Loged, Login, Payload } from "@/interfaces/login";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store/index'
import { loginAPI } from "@/api/users.api";

const initialState: Loged = {
  id: '',
  name: '',
  firstLastName: '',
  secondLastName: '',
  cellphone: '',
  email: '',
  avatar: {
    url: ''
  }
}

export const loginUser = createAsyncThunk<Loged, Login, { rejectValue: Payload }>(
  'store/loginUser',
  async (data: Login, { getState, rejectWithValue }) => {
    try {

      const response = await loginAPI.login(data)

      if (response.error) {
        throw response
      }

      const isLoged = true
      document.cookie = `isLoged=${isLoged};}; path=/`;

      return response.data.user
    } catch (err: any) {
      return rejectWithValue(err)
    }
  }
)

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
      state.avatar = {
        url: ''
      }
      const isLoged = false
      document.cookie = `isLoged=${isLoged};}; path=/`;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {

    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { _id, name, firstLastName, secondLastName, cellphone, email, avatar } = action.payload
      state.id = _id
      state.name = name
      state.firstLastName = firstLastName
      state.secondLastName = secondLastName
      state.cellphone = cellphone
      state.email = email
      state.avatar = avatar
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.payload) {
        throw new Error(action.payload.message)
      }
    })

  }
})

export const selectLoged = (state: RootState) => state.loged

export const {
  reducer,
  actions: { setLoged, clearLoged },
} = logedSlice
