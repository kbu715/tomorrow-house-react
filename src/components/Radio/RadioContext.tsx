import { createContext } from 'react'

export interface RadioContextValues {
  // Indexed Signature
  [key: string]: any
}

const RadioContext = createContext<RadioContextValues>({
  disabled: false,
  value: '',
  onChange: (value: string) => {},
})

export default RadioContext
