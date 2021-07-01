import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const CardList = ({ cards }) => {

    const cardList = cards.map( card => (
        <Card 
            id={card.id} 
            picture={card.picture} 
            visibility={card.visibility} 
            key={card.id} 
        />) 
    ); 

    return (
        <>
            {cardList}
        </>
    )
}

const mapStateToProps = (state) => {
    const { cards } = state;
    return { cards };
}

export default connect(mapStateToProps)(CardList);
