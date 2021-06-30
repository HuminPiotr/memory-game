import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const StartView = () => {
    localStorage.setItem('PLAYER_NAME', 'Anonim');
    
    const handleChange = (e) => {
        localStorage.setItem('PLAYER_NAME', e.target.value);
    }

    return(
    <>
    <div className="wrapper">
        <h1>Memory</h1>
        <div className="inputWrapper">
            <label htmlFor="name">Name</label> <br></br>
            <input type="text"  name="name" id="name" maxLength = '20' onChange={handleChange}/>
        </div>
        <Link to="/game" className="button" >Play</Link>
    </div>
    </>
)
}

export default StartView;