import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { flipDownCards, flipUpFirstCard, flipUpSecondCard, checkPair, frozenGame, defrostGame } from '../../actions';

// style 
const CardWrapper = styled.div`
  min-width: 100px;
  width: 100%;
  flex-basis: 20%;
  min-height: 100px;
  max-height: 150px;
  margin: 10px;
  perspective: 1000px;
  position: relative;
  cursor: pointer;

  @media(max-width: 600px){
    margin: 5px;
  }

  .card__content{
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.6s;
    transform: translateX(0%) rotateY(0deg);
    transform-style: preserve-3d;
    transform-origin: 100% 50%;

    &.open{
      transform: translateX(-100%) rotateY(180deg);
    }
    &.hidden{
      transform: translateX(0%) rotateY(0deg);
    }
    &.found{
      opacity: 0;
      cursor: default;
    }

  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 60px;
    backface-visibility: hidden;
    border-radius: 20px;
  }

  .front {
    /* border: solid 5px var(--quaternary); */
    background-image: repeating-linear-gradient( 
    210deg, var(--tertiary) 0px,var(--tertiary) 1px,var(--tertiary) 2px,var(--secondary) 5px );
  }

  .back {
    background-color: var(--secondary);
    transform: rotateY(180deg);
    border: solid 5px var(--tertiary);
  }

  .picture {
    height: 100%;
    width: 100%;
    padding: 5px;
    text-align: center;
  }

`

const Card = (
  { id, picture, visibility, 
    totalFlips, isFrozen, 
    flipUpFirstCard, 
    flipUpSecondCard, 
    checkPair,
    frozenGame, 
    defrostGame, 
    flipDownCards }) => {

    const clickCard = () => {
      const isFirstCard = totalFlips % 2 === 0;

      const TIME_OF_VISIBILITY_CARD = 700;
      const TIME_OF_FROZEN = 600;

      if(visibility === 'hidden'){
        if(isFirstCard && !isFrozen){
          flipUpFirstCard(id);
        }

        else if(!isFirstCard && !isFrozen){
          flipUpSecondCard(id);
          frozenGame();
          setTimeout(() => {
            checkPair()            
            setTimeout(() => {
              flipDownCards();
              defrostGame();
            }, TIME_OF_FROZEN);

          },TIME_OF_VISIBILITY_CARD)

        }
    }    
    }

      return (
        <>
          <CardWrapper onClick={clickCard}>
            <div className={`card__content ${visibility}`}  >
              <div className="face front"></div>
              <div className="face back ">
                <img src={picture} alt="image" className="picture"/>
              </div>
            </div>
          </CardWrapper>
        </>
      );
    
}

const mapStateToProps = state => {
    const { totalFlips,  isFrozen } = state;
    return { totalFlips, isFrozen };
}

const mapDispatchToProps = dispatch => ({
  flipUpFirstCard: (id) => dispatch(flipUpFirstCard(id)),
  flipUpSecondCard: (id) => dispatch(flipUpSecondCard(id)),
  checkPair: () => dispatch(checkPair()),
  flipDownCards: () => dispatch(flipDownCards()),
  frozenGame: () => dispatch(frozenGame()),
  defrostGame: () => dispatch(defrostGame()),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Card);
