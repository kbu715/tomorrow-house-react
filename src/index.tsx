import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles'
import { GlobalStyle } from './globalStyle'
import Effects from './Effects'
import Routes from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Effects />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
