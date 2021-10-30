import { Link } from 'react-router-dom'
import { StyledAvatar } from './styles'

export type AvatarSize = 'big' | 'small'

export interface AvatarProps {
  username: string
  to?: string
  image?: string
  size?: AvatarSize
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  username,
  to,
  image = '',
  size = 'small',
  className,
}) => {
  const alt = `${username}님`

  if (to != null) {
    if (!image)
      return (
        <StyledAvatar
          className={className}
          size={size}
          as={Link}
          to={to}
          aria-label={alt}
        />
      )

    return (
      <StyledAvatar className={className} size={size} as={Link} to={to}>
        <img src={image} alt={alt} />
      </StyledAvatar>
    )
  }

  if (!image)
    return <StyledAvatar className={className} size={size} aria-label={alt} />

  return (
    <StyledAvatar className={className} size={size}>
      <img src={image} alt={alt} />
    </StyledAvatar>
  )
}
