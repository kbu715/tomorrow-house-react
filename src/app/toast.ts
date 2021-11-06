import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ToastCategory } from 'src/types/enum'
import type { RootState } from './store'

interface ToastState {
  toasts: Toast[]
}

const initialState: ToastState = {
  toasts: [],
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state: ToastState, action: PayloadAction<Toast>) => {
      state.toasts.push(action.payload)
    },
    deleteToast: (
      state: ToastState,
      action: PayloadAction<ToastCategory> | undefined
    ) => {
      if (!action?.payload) state.toasts.pop()
      else {
        state.toasts = state.toasts.filter(
          (toast) => toast.category !== action.payload
        )
      }
    },
    resetToast: () => initialState,
  },
})

export const { setToast, deleteToast, resetToast } = toastSlice.actions

export default toastSlice.reducer

export const getToasts = (state: RootState) => state.toast.toasts
