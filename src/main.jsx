import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { MyContext } from './hooks/myContext'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <GlobalStyles />
      <MyContext.Provider value={{email: "joao@email.com"}}>
        <Routes />
      </MyContext.Provider>
   </ThemeProvider>
  </React.StrictMode>,
)
