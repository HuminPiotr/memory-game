export const startGame = (playerName, cards) => {
    return {
        type: `START_GAME`,
        payload: {
            playerName,
            cards
        }
    }
}


export const flipUpFirstCard = id => {
    return {
        type: `FLIP_UP_FIRST_CARD`,
        payload: {
            id
        }
    }
}

export const flipUpSecondCard = id => {
    return {
        type: `FLIP_UP_SECOND_CARD`,
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

export const frozenGame = () => {
    return {
        type: `FROZEN_GAME`,
    }
}

export const defrostGame = () => {
    return {
        type: `DEFROST_GAME`,
    }
}

export const flipDownCards = () => {
    return {
        type: `FLIP_DOWN_CARDS`,
    }
}

export const saveTime = (timeGame) => {
    return {
        type: `SAVE_TIME`,
        payload: {
            timeGame
        }
    }
}

export const completeGame = () => {
    return {
        type: `COMPLETE_GAME`
    }
}

export const endGame = () => {
    return {
        type: `END_GAME`,
    }
}

