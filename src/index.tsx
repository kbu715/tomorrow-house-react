import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles'
import { GlobalStyle } from './globalStyle'
import Effects from './Effects'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Effects />
          <Route exact path="/" component={App} />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
