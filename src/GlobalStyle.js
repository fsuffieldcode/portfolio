import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        --almostblack: #434343;
        --lightgrey: #bfbfbf;
        --purple: #f68084;
        --coral: #a6c0fe;

        overflow: hidden;
        height: 100%;
        color: var(--almostblack);

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