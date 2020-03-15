import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    html {
        --almostblack: #434343;
        --darkgrey: #6e6e6e;
        --midgrey: #8a8a8a;
        --lightgrey: #bfbfbf;
        --coral: #f68084;
        --grape: #827191;
        --lightblue: #a6c0fe;
        --wine: #cf4d6f;
        height: 100%;
        overflow: hidden;
        color: var(--almostblack);
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
        min-height: 100vh;
background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    }
    
    body {
        height: 100%;
        overflow: auto;
        font-family: 'Muli', sans-serif;
        box-sizing: border-box;
    }

`

export { GlobalStyle }
