import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface AuthState {
  user: User | null
  token: string
}

const initialState: AuthState = {
  user: null,
  token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    setToken: (state: AuthState, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    resetUser: (state: AuthState) => {
      state.user = null
    },
    resetAuth: () => initialState,
  },
})

export const getUser = (state: RootState) => state.auth.user
export const { setUser, setToken, resetUser, resetAuth } = authSlice.actions
export default authSlice.reducer
