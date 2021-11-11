import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import modalReducer from './modal'
import authReducer from './auth'
import systemReducer from './system'
import searchHistoryReducer from './searchHistory'
import toastReducer from './toast'
import productDetailReducer from './product/detail'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    system: systemReducer,
    searchHistory: searchHistoryReducer,
    toast: toastReducer,
    productDetail: productDetailReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
