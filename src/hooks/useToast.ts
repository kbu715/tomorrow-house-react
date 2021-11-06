import { useAppDispatch } from '.'
import type { ToastCategory } from 'src/types/enum'
import { deleteToast, setToast } from 'src/app/toast'

export const useToast = () => {
  const dispatch = useAppDispatch()

  const addToast = (toast: Toast) => {
    dispatch(setToast(toast))
  }

  const removeToast = (category: ToastCategory) => {
    dispatch(deleteToast(category))
  }

  return {
    addToast,
    removeToast,
  } as const
}
