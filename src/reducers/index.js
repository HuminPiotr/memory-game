const initialState = {
    pairsFound: 0,
    totalFlips: -1,
    timeGame: 0,
    isFrozen: false,
    playerName: undefined,
    firstCardId: undefined,
    secondCardId: undefined,
    gameComplete: false,
    cards: [],
    scoreList: [],
}

const rootReducer = (state = initialState, action) => {
    const {cards, firstCardId, secondCardId, pairsFound } = state;

    switch(action.type) {
        case('START_GAME'):
            return {
                playerName: action.payload.playerName || 'Anonim',
                cards: action.payload.cards,
                timeGame: 0,
                pairsFound: 0,
                totalFlips: 0,
                firstCardId: undefined,
                secondCardId: undefined,
                gameComplete: false,
            }

        case (`FLIP_UP_FIRST_CARD`):
            return{
                ...state,
                totalFlips: state.totalFlips += 1,
                cards: cards.map(card => {
                    if(card.id == action.payload.id) {
                        card.visibility = 'open';
                    }    
                    return card;
                }),
                firstCardId: action.payload.id,
            }

        case (`FLIP_UP_SECOND_CARD`):
            return{
                ...state,
                totalFlips: state.totalFlips += 1,
                cards: cards.map(card => {
                    if(card.id === action.payload.id){
                        card.visibility = 'open';
                    }
                    return card;
                }),
                secondCardId: action.payload.id,  
            }
     
        case('CHECK_PAIR'):
                const cardPair = cards.filter( (card) => card.id === firstCardId || card.id === secondCardId);

                if(cardPair[0].picture === cardPair[1].picture){
                    return{
                        ...state,
                        pairsFound: pairsFound + 1,
                        cards: cards.map( card => {
                            if(card.id === cardPair[0].id || card.id === cardPair[1].id){
                                card.visibility = 'found';
                            }
                            return card;
                        })
                    }
                }
            
        case(`FROZEN_GAME`):
            return {
                ...state,
                isFrozen: true,
            }

        case(`DEFROST_GAME`):
            return {
                ...state,
                isFrozen: false,
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
        
        case('SAVE_TIME'):
            return{
                ...state,
                timeGame: action.payload.timeGame,
            }

        case('COMPLETE_GAME'):
            return{
                ...state,
                gameComplete: true,
            }
        
        case('END_GAME'):
            return{
                ...state,
                gameComplete: false,
                pairsFound: 0,
            }
    }
    return state;
};

export default rootReducer;