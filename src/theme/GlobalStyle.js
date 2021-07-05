import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
    }
    
    html{ //happy rems
        font-size: 62.5%;
        --primary: #191919;
        --secondary: #FFFFFF;
        --tertiary: #030754;
        --quaternary: #5A7684;
        --quinary: #868784;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Verdana', sans-serif;
        margin: 0;
        background-color: #111111;
    }

    @media(max-width: 600px){
        html{
            font-size: 55%;
        }
    }
`

export default GlobalStyle;