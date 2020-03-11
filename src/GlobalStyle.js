import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


    html {
        --almostblack: #434343;
        --darkgrey: #6e6e6e;
        --lightgrey: #bfbfbf;
        --purple: #f68084;
        --darkpurple: #827191;
        --coral: #a6c0fe;
        --wine: #cf4d6f;
        height: 100%;
        overflow: hidden;
        color: var(--almostblack);
    }
    body {
        height: 100%;
        overflow: auto;
        font-family: 'Muli', sans-serif;
        box-sizing: border-box;
    }

`

export { GlobalStyle }
