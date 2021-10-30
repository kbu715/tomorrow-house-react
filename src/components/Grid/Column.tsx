import React, { ReactNode } from 'react'
import * as Styled from './styles'

export interface ColumnProps {
  sm: number
  md?: number
  lg?: number
  children?: ReactNode
}

export const Column: React.FC<ColumnProps> = ({
  sm,
  md,
  lg = md,
  children,
}) => {
  return (
    <Styled.Column sm={sm} md={md} lg={lg}>
      {children}
    </Styled.Column>
  )
}
