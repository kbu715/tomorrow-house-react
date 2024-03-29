import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ModalCategory } from 'src/types/enum'
import type { RootState } from './store'

interface ModalState {
  modals: Modal[]
}

const initialState: ModalState = {
  modals: [],
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state: ModalState, action: PayloadAction<Modal>) => {
      state.modals.push(action.payload)
    },
    deleteModal: (
      state: ModalState,
      action: PayloadAction<ModalCategory | undefined>
    ) => {
      if (!action.payload) state.modals.pop()
      else {
        state.modals = state.modals.filter(
          (modal) => modal.category !== action.payload
        )
      }
    },
    resetModal: () => initialState,
  },
})

export const { setModal, deleteModal, resetModal } = modalSlice.actions

export default modalSlice.reducer

export const getModals = (state: RootState) => state.modal.modals
