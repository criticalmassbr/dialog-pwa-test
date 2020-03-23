import { createGlobalStyle } from 'styled-components'

export const ResetCssGlobal = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    ul, li, a {
        text-decoration: none;
        color: black;
        font-weight: normal;
        list-style: none;
    }
`