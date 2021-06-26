const initialState = {
    pairsFound: 0,
    totalFlips: -1,
    time: 0,
    playerName: undefined,
    firstCardId: undefined,
    secondCardId: undefined,
    gameComplete: false,
    cards: [],
    scoreList: [],

}

const rootReducer = (state = initialState, action) => {
    const {cards, firstCardId, secondCardId} = state;

    switch(action.type) {
        case('START_GAME'):
            return {
                playerName: action.payload.playerName,
                cards: action.payload.cards,
                pairsFound: 0,
                totalFlips: 1,
                firstCardId: undefined,
                secondCardId: undefined,
                gameComplete: false,
            }
     
        case('FLIP_UP_CARD'):
            return {
                ...state,
                totalFlips: state.totalFlips += 1,
                cards: cards.map(card => {
                    if(card.id === action.payload.id) {
                        card.visibility = 'open';
                    }
                    return card;
                }),  
                firstCardId: cards.filter( (card) => state.totalFlips % 2 === 0 && 
                card.id === payload.id )
                
            }

        case('CHECK_PAIR'):
                const cardPair = cards.filter( (card) => card.id === firstCardId || card.id === secondCardId);

                console.log(cardPair);

                
            

            return{

            }
            

        case('FLIP_DOWN_CARDS'):
            return {
                ...state,
                cards: cards.map( card => {
                    if(card.visibility === 'open'){
                        card.visibility = 'hidden'
                    }
                    return card;
                })
            }

        
    }
    return state;
};

export default rootReducer;