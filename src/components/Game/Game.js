import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { startGame } from '../../actions';
import { shuffleArray } from '../../functions/shuffleArray';

import CardList from '../CardList/CardList';
import PlayerName from '../PlayerName/PlayerName';
import Timer from '../Timer/Timer';
import TotalFlips from '../TotalFlips/TotalFlips';

//images
import alien from '../../assets/images/alien.svg';
import dog from '../../assets/images/dog.svg';
import monkey from '../../assets/images/monkey.svg';
import panda from '../../assets/images/panda.svg';
import pig from '../../assets/images/pig.svg';
import wolf from '../../assets/images/wolf.svg';

import './style.css';

const Game = ({ startGame, pairsFound }) => {
         
        const playerName = localStorage.getItem('PLAYER_NAME');
        // const pictureList = [
        //     alien, alien, dog, dog, monkey, monkey, panda, panda, wolf, wolf, pig, pig
        // ]        //od liczby par zależeć będzie ile kart jest wygenerowanych
        const pictureList = [
            alien, alien
        ]
        const [gameIsComplete, setGameIsComplite] = useState(false); 
        

    useEffect( () => {
        const cards = createCards();
        startGame(playerName, cards);
    },[])

    useEffect( () => {
        if(pairsFound >= pictureList.length / 2){
            setGameIsComplite(true);

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
            <div className="container">
                <div className="panel">
                    <PlayerName />
                    <Timer />
                    <TotalFlips />
                </div>
                
                <div className="board">
                    <CardList />
                </div>
            </div>
            {
                gameIsComplete &&
                <Redirect to="/end" />
            }
            </>
        )
    
}

const mapStateToProps = (state) => {
    const { pairsFound } = state;
    return { pairsFound };
}

const mapDispatchToProps = 
    dispatch => ({
        startGame: (playerName, cardsObject) => 
        dispatch(startGame(playerName, cardsObject)),
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Game);