import React from 'react';
import { connect } from 'react-redux';

import { startGame } from '../../actions';
import { shuffleArray } from '../../functions/shuffleArray';

import CardList from '../CardList/CardList';

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.startGame = props.startGame;
        this.playerName = localStorage.getItem('playerName');
        this.cardsElements = [];
        this.clickCounter = 0;
        this.pictureList = [
            "a","a", "b","b", "c","c",
            "d","d","e","e","f","f"
        ]

        
        
    }
 
    componentDidMount(){
        const cards = this.createCards();
        this.startGame(this.playerName, cards);

        this.cardsElements = document.querySelectorAll('.card');
        console.log(this.cardsElements);
    }

    createCards(){
        const shuffledPictureList = shuffleArray(this.pictureList);

        const cardsObject = shuffledPictureList.map( (picture, id) => ({
            id,
            picture,
            visibility: 'hidden',
        }))

        return cardsObject;
    }

    clickCard(){
        this.clickCounter++;
        if(this.clickCounter === 1){

        } 
        if(this.clickCounter === 0){
            this.clickCounter = 0;
        }
    } 

    
    render(){
        return (
            <div className="board">
                <CardList />
            </div>
        )
    }
}

const mapDispatchToProps = 
    dispatch => ({
        startGame: (playerName, cardsObject) => 
        dispatch(startGame(playerName, cardsObject)),
        checkPair: () => dispatch(checkPair()),
    })

export default connect(
    null,
    mapDispatchToProps
    )(Game);