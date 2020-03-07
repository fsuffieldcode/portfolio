import styled, { css } from 'styled-components'


const Main = styled.main`
width: 100vw;
height: 1500px;
background-color: lightgrey;
font-family: 'Open Sans', sans-serif;
box-sizing: border-box;
background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
`

const MainContainer = styled.div`
width: 90%;
max-width: 1100px;
margin-left: auto;
margin-right: auto;
`


export { Main, MainContainer }