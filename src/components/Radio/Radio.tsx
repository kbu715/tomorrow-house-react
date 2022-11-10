import { ReactNode } from 'react'
import { useContext } from 'react'
import RadioContext from './RadioContext'

interface RadioProps {
  children?: ReactNode
  value?: string | number | readonly string[]
  name?: string
  defaultChecked?: boolean
  disabled?: boolean
}

const Radio: React.FC<RadioProps> = ({ children, value, name, disabled }) => {
  const group = useContext(RadioContext)

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) =>
          group.onChange && group.onChange(e.currentTarget.value)
        }
      />
      {children}
    </label>
  )
}

export default Radio
