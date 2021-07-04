import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
    }
    
    html{ //happy rems
        font-size: 62.5%;
        --primary: #bee3db;
        --secondary: #89b0ae;
        --tertiary: #555b6e;
        --quaternary: #faf9f9;
        --quinary: #3c6e71;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Verdana', sans-serif;
        margin: 0;
        background: linear-gradient(to left, var(---primary), var(--secondary));
    }

    @media(max-width: 600px){
        html{
            font-size: 55%;
        }
    }
`

export default GlobalStyle;