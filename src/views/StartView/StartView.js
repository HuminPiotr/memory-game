import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const StartView = () => {
    localStorage.setItem('playerName', 'Anonim');
    const handleChange = (e) => {
        localStorage.setItem('playerName', e.target.value);
    }

    return(
    <>
    <div className="wrapper">
        <h1>Memory</h1>
        <div className="inputWrapper">
            <label htmlFor="name">Name</label> <br></br>
            <input type="text"  name="name" id="name" onChange={handleChange}/>
        </div>
        <Link to="/game" className="button" >Play</Link>
    </div>
    </>
)
}

export default StartView;