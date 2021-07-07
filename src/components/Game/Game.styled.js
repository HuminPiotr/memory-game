import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px;
    display: flex;

    @media(max-width: 600px){
        margin: 0;
        padding: 0;
        flex-direction: column-reverse;
    }

    .panel {
        display: flex;
        flex-direction: column;
        width: 15%;
        margin-top: 20px;
        text-align: center;
        border: 1px solid var(--quaternary);
        color: var(--secondary);
        @media(max-width: 600px){
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            
        }
    }
    .board {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background: transparent;
        max-width: 800px;
        width: 100%;
        min-height: 80vh;
        margin: 0 auto;
    }
`