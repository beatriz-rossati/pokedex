import { useState } from 'react'

import { GlobalStyle } from './GlobalStyle'
import { GlobalProvider } from './context/GlobalProvider'
import Router from './routes/Router'

function App() {
  

  return (
    <>
      <GlobalStyle />
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </>
  )
}

export default App
