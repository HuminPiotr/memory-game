import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { convertTime } from '../../utils/convertTime';
import uniqid from 'uniqid'


import ScoreRepository from '../../store/ScoreRepository'
import ScoreStorage from '../../store/ScoreStorage';
import ListItem from './ListItem.jsx';

import * as Styled from './ScoreList.styled';



const ScoreList = ({ playerName, timeGame, totalFlips }) => {

    const createScoreRecord = (player, time, flips) => {
        return (
            {
                id: uniqid(),
                player,
                time,
                flips,
                isActual: true,
            }
        )
    }

    const storage = new ScoreStorage();
    const repository = new ScoreRepository(storage);
    let scoreList = [];
    
    

    const actualScore = createScoreRecord(playerName, timeGame, totalFlips);


        if (actualScore.time) {
            repository.refresh();
            repository.add(actualScore);

            scoreList = repository.getAll();

            scoreList = scoreList.map((item) => (
                <ListItem
                    key={item.id}
                    id={item.id}
                    player={item.player}
                    time={item.time}
                    isActual={item.isActual}
                />))

        }
        

        


    return (
        <>
                <Styled.ScoreList>
                    {scoreList}
                    
                        { !scoreList.find(item => item.key === actualScore.id  ) &&   
                            <li>
                                <p className="scoreList__actualScore">
                                    <span>{playerName}</span> &nbsp;
                                    <span>{convertTime(actualScore.time)}</span>
                                </p>
                            </li>
                        }

                    
                </Styled.ScoreList>
        </>
    )
}

const mapStateToProps = (state) => {
    const { playerName, timeGame, totalFlips } = state;
    return { playerName, timeGame, totalFlips };
}

export default connect(mapStateToProps)(ScoreList);