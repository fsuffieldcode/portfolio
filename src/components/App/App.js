import React from 'react'
import styled from 'styled-components'

import NavBar from '../Nav/Nav'
import Intro from '../Intro/Intro'
import Stack from '../Stack/Stack'

import { Main, MainContainer } from './App.styles'



const App = () => {
    return (
        <Main>
            <MainContainer>
                <NavBar />
                <Intro />
                <Stack />
            </MainContainer>
        </Main>
    )
}

export default App