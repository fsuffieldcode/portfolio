import styled from 'styled-components'
import React from 'react'
import { GlobalStyle } from '../GlobalStyle'

import NavBar from './Nav'
import Intro from './Intro'
import Stack from './Stack'
import Work from './WorkSection'

// Styles

const Main = styled.main`
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
`

const MainContainer = styled.div`
  width: 90%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`

// Code

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Main>
        <MainContainer>
          <NavBar />
          <Intro />
          <Stack />
          <Work />
        </MainContainer>
      </Main>
    </div>
  )
}

export default App
