import React, { useState } from 'react';
import { connect } from 'react-redux';


import Card from './Card';

//komentarz dla testu
const CardList = ({ cards }) => {

    const cardList = cards.map( card => (
        <Card 
            id={card.id} 
            picture={card.picture} 
            visibility={card.visibility} 
            key={card.id} 
        />) ); 


    
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
