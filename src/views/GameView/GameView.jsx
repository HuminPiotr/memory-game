import React from 'react';
import styled from 'styled-components';

import Game from '../../components/Game/Game.jsx';

const Background = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(to left, var(--secondary),  var(--primary));

`

const GameView = () => (
    <>
        <Background>
            <Game />  
        </Background>
    </>
)

export default GameView