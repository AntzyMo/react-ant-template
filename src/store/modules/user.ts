import { createSlice } from '@reduxjs/toolkit'
import { setStorage, getStorage, removeStorage } from '../../utils'

export const user = createSlice({
  name: 'user',
  initialState: {
    token: getStorage('token')
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload
      setStorage('token', payload)
    },
    removeToken: (state) => {
      state.token = ''
      removeStorage('token')
    }
  }
})

export const { setToken, removeToken } = user.actions

export default user.reducer
