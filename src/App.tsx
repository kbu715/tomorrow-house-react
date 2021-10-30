import React from 'react'
import 'normalize.css'

import { useAppSelector } from 'src/hooks'
import { getModals } from 'src/app/modal'

import { Column, Container, Row } from 'src/components/Grid'
import { Modal } from 'src/components/Modal'
import { Input, Select } from 'src/components/Forms'
import { useState, useCallback, ChangeEvent } from 'react'

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
          <Column sm={4} md={6}>
            <div style={{ background: 'lightblue' }}>내일의 집 리액트</div>
            <Input type="text" value={value} onChange={handleChange} />
          </Column>

          <Select
            id="test"
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
                label: '메가커피',
                value: '메가커피',
              },
            ]}
          />
        </Row>
      </Container>

      {modals.length > 0 && <Modal />}
    </div>
  )
}

export default App
