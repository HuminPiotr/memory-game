import React from 'react';
import { connect } from 'react-redux';
import { flipDownCards, flipUpFirstCard, flipUpSecondCard, checkPair, frozenGame, defrostGame } from '../../actions';
import * as Styled from './Card.styled';

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
          <Styled.Card onClick={clickCard}>
            <div className={`card__content ${visibility}`}  >
              <div className="face front"></div>
              <div className="face back ">
                <img src={picture} alt="image" className="picture"/>
              </div>
            </div>
          </Styled.Card>
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
