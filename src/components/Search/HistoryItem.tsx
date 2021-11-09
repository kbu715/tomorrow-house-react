import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { getSearchQueryUrl } from '../utils'

import { CloseIcon } from 'src/assets/images'
import { StyledSearchHistoryItem } from './styles'

interface SearchHistoryItemProps {
  history: SearchHistory
  deleteHistory: (content: string) => void
  onClick?: () => void
  searchHistory: (content: string) => void
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  history,
  deleteHistory,
  searchHistory,
}) => {
  // const deleteItem = () => deleteHistory(history.content)
  // const searchQueryUrl = getSearchQueryUrl(history.content)

  const { content } = history

  const searchQueryUrl = getSearchQueryUrl(content)
  const searchItem = () => searchHistory(content)
  const deleteItem = () => deleteHistory(content)

  return (
    <StyledSearchHistoryItem>
      <Link className="word" to={searchQueryUrl} onClick={searchItem}>
        {history.content}
      </Link>
      <button
        className="delete"
        type="button"
        value={content}
        onClick={deleteItem}
        aria-label="검색어 삭제"
      >
        <CloseIcon />
      </button>
    </StyledSearchHistoryItem>
  )
}

const MemoSearchHistoryItem = memo(SearchHistoryItem)

export { MemoSearchHistoryItem as SearchHistoryItem }
