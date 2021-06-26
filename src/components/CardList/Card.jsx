import React from 'react';

import { connect } from 'react-redux';
import { flipUpCard, flipDownCards } from '../../actions';

import './style.css';

const Card = ({ id, picture, visibility, totalFlips, flipUpCard, flipDownCards}) => {

    const clickCard = () => {
      if(visibility === 'hidden'){
        console.log('aha')
        flipUpCard(id);
      }
      if(totalFlips % 2 === 0){
        setTimeout(flipDownCards,2000);
      }
      
    
    }
      return (
        <>
          <div className="card" onClick={clickCard}>
            <div className={`card__content ${visibility}`}  >
              <div className="face front">front</div>
              <div className="face back ">{picture}</div>
            </div>

          </div>
        </>
      );
    
}

const mapStateToProps = state => {
    const { totalFlips } = state;
    return { totalFlips };
}

const mapDispatchToProps = dispatch => ({
  flipUpCard: (id) => dispatch(flipUpCard(id)),
  flipDownCards: () => dispatch(flipDownCards())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Card);
