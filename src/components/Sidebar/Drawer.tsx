import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import { useRouter } from 'src/hooks'
import { getGnbMenuName, getPageUrl } from '../utils'

import {
  ChevronIcon,
  CommunityIcon,
  ExpertIcon,
  StoreIcon,
} from 'src/assets/images'

import { StyledSidebarDrawer } from './styles'

interface SidebarDrawerProps {
  category: string
  urlMap: Record<string, string>
  closeSidebar?: () => void
  isLast?: boolean // 마지막 요소인지 판단 => border-bottom 값을 주기 위한 조치
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  category,
  urlMap,
  closeSidebar,
  isLast,
}) => {
  const { location } = useRouter() // location : `/community/photos`
  const [, page] = location.pathname.split('/') // page : `community`

  const [open, setOpen] = useState(page === category)

  const toggleOpen = () => setOpen((prev) => !prev)

  const label = getGnbMenuName(category)
  let icon: React.SVGProps<SVGSVGElement>

  switch (category) {
    case 'community':
      icon = <CommunityIcon className="icon" />
      break
    case 'store':
      icon = <StoreIcon className="icon" />
      break
    case 'expert':
      icon = <ExpertIcon className="icon" />
      break
    default:
      icon = <CommunityIcon className="icon" />
      break
  }

  return (
    <StyledSidebarDrawer
      className={cx('drawerMenu', category, { open }, { isLast })}
    >
      <button
        className={cx('drawerMenuButton')}
        type="button"
        onClick={toggleOpen}
      >
        {icon}
        {label}
        <ChevronIcon className="chevron" />
      </button>

      <div className="drawerMenuContent">
        <ul>
          {Object.entries(urlMap).map(([url, label]) => (
            <li key={`drawerMenuItem-${url}`}>
              <NavLink
                to={getPageUrl(category, url)}
                onClick={closeSidebar}
                exact
                activeClassName="active"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </StyledSidebarDrawer>
  )
}
