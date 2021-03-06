import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


import { completeGame, startGame } from '../../actions';
import { shuffleArray } from '../../utils/shuffleArray';

import CardList from '../CardList/CardList';
import PlayerName from '../PlayerName/PlayerName.jsx';
import Timer from '../Timer/Timer.jsx';
import TotalFlips from '../TotalFlips/TotalFlips.jsx';

import * as Styled from './Game.styled'

//images
import image1 from '../../assets/images/1.svg';
import image2 from '../../assets/images/2.svg';
import image3 from '../../assets/images/3.svg';
import image4 from '../../assets/images/4.svg';
import image5 from '../../assets/images/5.svg';
import image6 from '../../assets/images/6.svg';



const Game = ({ startGame, pairsFound, gameComplete, completeGame}) => {
         
        const playerName = localStorage.getItem('PLAYER_NAME');
        const pictureList = [
            image1, image1, image2, image2, image3, image3, image4, image4, image5, image5, image6, image6
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
            <Styled.Container>
                <div className="panel">
                    <PlayerName />
                    <Timer />
                    <TotalFlips />
                </div>
                
                <div className="board">
                    <CardList />
                </div>
            </Styled.Container>
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