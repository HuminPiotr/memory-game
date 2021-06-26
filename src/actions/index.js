export const startGame = (playerName, cards) => {
    return {
        type: `START_GAME`,
        payload: {
            playerName,
            cards
        }
    }
}

export const flipUpCard = (id) => {
    return {
        type: `FLIP_UP_CARD`,
        payload: {
            id
        }
    }
}

export const checkPair = () => {
    return {
        type: `CHECK_PAIR`,
    }
}

export const flipDownCards = () => {
    return {
        type: `FLIP_DOWN_CARDS`,
    }
}

