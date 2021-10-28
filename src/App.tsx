import React from 'react'
import 'normalize.css'

import { useAppSelector } from 'src/hooks'
import { getModals } from 'src/app/modals'

import { Column, Container, Row } from 'src/components/Grid'
import { Modal } from 'src/components/Modal'

const App: React.FC = () => {
  const modals = useAppSelector(getModals)

  return (
    <div>
      <Container>
        <Row>
          <Column sm={4} md={6}>
            <div style={{ background: 'lightblue' }}>내일의 집 리액트</div>
          </Column>
        </Row>
      </Container>

      {modals.length > 0 && <Modal />}
    </div>
  )
}

export default App
