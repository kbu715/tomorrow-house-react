import React from 'react'
import 'normalize.css'

import { useAppSelector } from 'src/hooks'
import { getModals } from 'src/app/modal'

import { Column, Container, Row } from 'src/components/Grid'
import { Modal } from 'src/components/Modal'
import { Input, Select } from 'src/components/Forms'
import { useState, useCallback, ChangeEvent } from 'react'
import { SearchInput, SearchHistory } from 'src/components/Search'
import { Gnb } from 'src/components/Gnb'
import { theme } from 'src/styles'
import { Button } from 'src/components/Button'
import { Avatar } from 'src/components/Avatar'

const App: React.FC = () => {
  const modals = useAppSelector(getModals)
  const [value, setValue] = useState('')

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Column sm={4}>
            <div style={{ background: theme.colors.background }}>
              내일의 집 리액트
            </div>
            <Input
              type="text"
              value={value}
              onChange={handleChange}
              icon="search"
              placeholder="아무렇게나"
              required
            />
          </Column>

          <Select
            id="brand"
            name="brand"
            options={[
              {
                label: '스타벅스',
                value: '스타벅스',
              },
              {
                label: '이디아',
                value: '이디아',
              },
              {
                label: '투썸',
                value: '투썸',
              },
              {
                label: '메가커피',
                value: '메가커피',
              },
              {
                label: '파리바게트',
                value: '파리바게트',
              },
            ]}
          />
          <SearchInput />
          <Button variant="primary" size={40}>
            등록 완료
          </Button>
          <Avatar username="디폴트" size="big" />
        </Row>
        <Row>
          <Gnb />
        </Row>
        <Row>
          <SearchHistory />
        </Row>
      </Container>

      {modals.length > 0 && <Modal />}
    </div>
  )
}

export default App
