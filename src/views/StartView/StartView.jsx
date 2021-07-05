import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header'

const StyledWrapper = styled.div`
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    @media(max-width: 600px){
        padding: 0;
    }

    .inputWrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
        transform: translate(-50%, -50%);
        text-align: center;
        color: var(--tertiary);
    }

    label {
        display: inline-block;
        text-transform: uppercase;
        font-size: 14px;
        position: relative;
        top: 10px;
    }

    input {
        height: 50px;
        font-size: 16px;
        background: transparent;
        border-color: white;
    }

    .button {
        margin-top: 25px;
        padding: 10px 25px;
        border: solid 1px #1111f8;
        color: #1111f8;
        text-decoration: none;
        border-radius: 20px;
    }
`
const Background = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to left, var(--primary), var(--secondary));

`


const StartView = () => {
    localStorage.setItem('PLAYER_NAME', 'Anonim');
    
    const handleChange = (e) => {
        localStorage.setItem('PLAYER_NAME', e.target.value);
    }

    return(
    <>
    <Background>
    <StyledWrapper>
        {/* <h1>Memory</h1> */}
        <Header>Memory</Header>
        <div className="inputWrapper">
            <label htmlFor="name">Player name</label> <br></br>
            <input type="text"  name="name" id="name" maxLength = '20' onChange={handleChange}/>
            <Link to="/game" className="button" >Play</Link>
        </div>
        
    </StyledWrapper>
    </Background>
    </>
)
}

export default StartView;