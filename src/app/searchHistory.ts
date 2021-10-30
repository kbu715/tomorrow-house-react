import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import store from 'store'

import type { RootState } from './store'

const MAX_COUNT = 5

interface SearchHistoryState {
  histories: SearchHistory[]
}

const initialState: SearchHistoryState = {
  histories: store.get('tmrHouse.searchHistories') || [],
}

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    setSearchHistory: (
      state: SearchHistoryState,
      action: PayloadAction<string>
    ) => {
      if (!action.payload) return
      const newHistories = [
        {
          content: action.payload,
          createdAt: Date.now(),
        },
        ...state.histories,
      ]
      state.histories = newHistories.slice(0, MAX_COUNT)
    },
    deleteSearchHistory: (
      state: SearchHistoryState,
      action: PayloadAction<string>
    ) => {
      state.histories = state.histories.filter(
        (history) => history.content !== action.payload
      )
    },
    resetSearchHistory: (state: SearchHistoryState) => {
      state.histories = []
      store.set('tmrHouse.searchHistories', [])
    },
  },
})

export const { setSearchHistory, deleteSearchHistory, resetSearchHistory } =
  searchHistorySlice.actions

export default searchHistorySlice.reducer

export const getSearchHistory = (state: RootState) =>
  state.searchHistory.histories
