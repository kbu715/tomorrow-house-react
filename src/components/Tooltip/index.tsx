import { TooltipContent } from './styles'

interface TooltipProps {
  tooltipOpen: boolean
}

export default function Tooltip({ tooltipOpen }: TooltipProps) {
  return <TooltipContent isActive={tooltipOpen}>😛</TooltipContent>
}
