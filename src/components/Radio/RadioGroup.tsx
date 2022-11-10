import { ReactNode } from 'react'
import RadioContext from './RadioContext'

interface RadioGroupProps {
  label?: string
  children?: ReactNode
  [key: string]: any
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  children,
  ...rest
}) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </fieldset>
  )
}

export default RadioGroup
