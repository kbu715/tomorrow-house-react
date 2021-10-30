import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import { useAppDispatch, useRouter } from 'src/hooks'
import { getSearchQueryUrl } from '../utils'
import { setSearchHistory } from 'src/app/searchHistory'

import { SearchIcon } from 'src/assets/images'
import { Input } from '../Forms'

interface SearchInputProps {
  onFocus?: () => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ onFocus }) => {
  const dispatch = useAppDispatch()
  const { history } = useRouter()

  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const postSubmit = () => {
    if (!value) return
    history.push(getSearchQueryUrl(value))
    //FIXME: AJAX Call
  }

  const handleSubmit = () => {
    postSubmit()
    dispatch(setSearchHistory(value))
    setValue('')
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation() // TODO: study
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <Input
      type="text"
      value={value}
      placeholder="스토어 검색"
      onChange={handleChange}
      onFocus={onFocus}
      onKeyPress={handleEnter}
    >
      <button className="icon" type="button" onClick={handleSubmit}>
        <SearchIcon />
      </button>
    </Input>
  )
}
