import styled from "styled-components";

export const Header = styled.h1`
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -25%);
        display: block;
        text-transform: uppercase;
        text-align: center;
        font-size: 8vw;
        font-weight: 100;
        letter-spacing: 10px;
        margin: 0;
        margin-bottom: 50px;
        color: var(--tertiary);
        text-shadow: 1px 1px 5px var(--secondary
        );

    @media(max-width: 600px){
        font-size: 10vw;
    }
        
    &::before{
        content: 'MEMORY';
        position: absolute;
        color: transparent;
        background-image: repeating-linear-gradient(
        45deg,
        transparent 0,
        transparent 2px,
        white 2px,
        white 4px
        );
        -webkit-background-clip: text;
        top: 0px;
        left: 0px;
        z-index: -1;
        transition: 1s;
       
    }
    &::after{
        content: 'MEMORY';
        position: absolute;
        color: transparent;
        background-image: repeating-linear-gradient(
        135deg,
        transparent 0,
        transparent 2px,
        white 2px,
        white 4px
    );
        -webkit-background-clip: text;
        top: 0px;
        left: 0px;
        transition: 1s;
    }

    &:hover::before {
        top: 10px;
        left: 10px;
    }

    &:hover::after {
        top: -10px;
        left: -10px;
        } 
`