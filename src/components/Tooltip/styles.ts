import styled from 'styled-components'
import { flexbox } from '../../styles/utils/flexbox'
// content-box
export const TooltipContent = styled.div<{ isActive: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 150px;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #e0e2e7;
  border-radius: 4px;

  // button-size + tooltip-size + padding
  top: calc(40px + 12px + 8px);

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  transform: ${({ isActive }) =>
    isActive ? 'translate3d(-50%, 0, 0);' : 'translate3d(-50%, -10px, 0)'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
  transition: opacity 200ms ease-in-out, transform 200ms ease-in-out,
    visibility 200ms ease-in-out;

  ${flexbox()}

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    top: -24px;
    display: block;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 10px solid transparent;
    content: '';
  }

  &::before {
    border-bottom-color: #e0e2e7;
  }

  &::after {
    top: calc(-24px + 2px);
    border-bottom-color: #fff;
  }
`
