import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
    }
    
    html{ //happy rems
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Trebuchet MS', sans-serif
    }

    @media(max-width: 600px){
        html{
            font-size: 55%;
        }
    }
`

export default GlobalStyle;