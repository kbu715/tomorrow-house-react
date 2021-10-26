import React from 'react'
import 'normalize.css'

import { Column, Container, Row } from 'src/components/Grid'

const App: React.FC = () => {
  return (
    <div>
      <Container>
        <Row>
          <Column sm={4} md={6}>
            <div style={{ background: 'lightblue' }}>내일의 집 리액트</div>
          </Column>
        </Row>
      </Container>
    </div>
  )
}

export default App
