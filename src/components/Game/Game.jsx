import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import { completeGame, startGame } from '../../actions';
import { shuffleArray } from '../../utils/shuffleArray';

import CardList from '../CardList/CardList';
import PlayerName from '../PlayerName/PlayerName.jsx';
import Timer from '../Timer/Timer.jsx';
import TotalFlips from '../TotalFlips/TotalFlips.jsx';

//images
import alien from '../../assets/images/alien.svg';
import dog from '../../assets/images/dog.svg';
import monkey from '../../assets/images/monkey.svg';
import panda from '../../assets/images/panda.svg';
import pig from '../../assets/images/pig.svg';
import wolf from '../../assets/images/wolf.svg';

const GameWrapper = styled.div`
    margin: 25px;
    display: flex;

    @media(max-width: 600px){
        margin: 0;
        flex-direction: column-reverse;
    }

    .panel {
        display: flex;
        flex-direction: column;
        width: 15%;
        margin-top: 20px;
        text-align: center;
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
        background: #053C5E;
        max-width: 800px;
        width: 100%;
        min-height: 80vh;
        margin: 0 auto;
    }
`

const Game = ({ startGame, pairsFound, gameComplete, completeGame}) => {
         
        const playerName = localStorage.getItem('PLAYER_NAME');
        const pictureList = [
            alien, alien, dog, dog, monkey, monkey, panda, panda, wolf, wolf, pig, pig
        ]        //od liczby par zależeć będzie ile kart jest wygenerowanych

            
    useEffect( () => {
        const cards = createCards();
        startGame(playerName, cards);
    },[])

    useEffect( () => {
        if(pairsFound >= pictureList.length / 2){
            completeGame();
        }

    },[pairsFound])


    const createCards = () => {
        const shuffledPictureList = shuffleArray(pictureList);

        const cardsObject = shuffledPictureList.map( (picture, id) => ({
            id,
            picture,
            visibility: 'hidden',
        }))

        return cardsObject;
    }

        return (
            <>
            <GameWrapper>
                <div className="panel">
                    <PlayerName />
                    <Timer />
                    <TotalFlips />
                </div>
                
                <div className="board">
                    <CardList />
                </div>
            </GameWrapper>
            {
                gameComplete && <Redirect to="/end" />
            }
            </>
        )
    
}

const mapStateToProps = (state) => {
    const { pairsFound, gameComplete } = state;
    return { pairsFound, gameComplete };
}

const mapDispatchToProps = 
    dispatch => ({
        startGame: (playerName, cardsObject) => 
        dispatch(startGame(playerName, cardsObject)),
        completeGame: () => dispatch(completeGame()),
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Game);