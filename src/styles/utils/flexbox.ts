import { css } from 'styled-components'

const convertFullName = (value: string) => {
  switch (value) {
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'between':
      return 'space-between'
    case 'around':
      return 'space-around'
    default:
      return value
  }
}

export function flexbox(jc: string = 'center', ai: string = 'center') {
  return css`
    display: flex;
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
  `
}

export function inlineFlexbox(jc: string = 'center', ai: string = 'center') {
  return css`
    display: inline-flex;
    justify-content: ${convertFullName(jc)};
    align-items: ${convertFullName(ai)};
  `
}
