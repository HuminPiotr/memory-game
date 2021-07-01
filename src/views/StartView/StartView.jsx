import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 600px){
        padding: 0;
    }

    h1 {
        text-transform: uppercase;
        text-align: center;
        font-size: 6rem;
        letter-spacing: 10px;
        margin: 0;
        margin-bottom: 100px;
    }

    .inputWrapper {
        text-align: center;
    }

    label {
        display: inline-block;
        text-transform: uppercase;
        font-size: 14px;
    }

    input {
        height: 50px;
        font-size: 16px;
    }

    .button {
        margin-top: 25px;
        padding: 10px 25px;
        border: solid 1px blue;
        color: blue;
        text-decoration: none;
    }
`

const StartView = () => {
    localStorage.setItem('PLAYER_NAME', 'Anonim');
    
    const handleChange = (e) => {
        localStorage.setItem('PLAYER_NAME', e.target.value);
    }

    return(
    <>
    <StyledWrapper>
        <h1>Memory</h1>
        <div className="inputWrapper">
            <label htmlFor="name">Player name</label> <br></br>
            <input type="text"  name="name" id="name" maxLength = '20' onChange={handleChange}/>
        </div>
        <Link to="/game" className="button" >Play</Link>
    </StyledWrapper>
    </>
)
}

export default StartView;