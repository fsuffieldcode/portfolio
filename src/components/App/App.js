import React from "react"
import { GlobalStyle } from "../../GlobalStyle"

import NavBar from "../Nav/Nav"
import Intro from "../Intro/Intro"
import Stack from "../Stack/Stack"
import Projects from '../Projects/index'

import { Main, MainContainer } from "./App.styles"

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Main>
        <MainContainer>
          <NavBar />
          <Intro />
          <Stack />
          <Projects />
        </MainContainer>
      </Main>
    </div>
  )
}

export default App
