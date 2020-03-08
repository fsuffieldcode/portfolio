import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        overflow: hidden;
        height: 100%;
        color: #434343;
    }
    body {
        height: 100%;
        overflow: auto;
        font-family: 'Muli', sans-serif;
        box-sizing: border-box;
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    }
`

export { GlobalStyle }