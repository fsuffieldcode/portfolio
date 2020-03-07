import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        overflow: hidden;
        height: 100%;
    }
    body {
        height: 100%;
        overflow: auto;
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
        background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
        color: white;
    }
`

export { GlobalStyle }