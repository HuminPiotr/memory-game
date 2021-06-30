import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { convertTime } from '../../functions/convertTime';
import uniqid from 'uniqid'


import ScoreRepository from '../../store/ScoreRepository'
import ScoreStorage from '../../store/ScoreStorage';
import ListItem from './ListItem';

import './style.css'

const ScoreList = ({ playerName, timeGame, totalFlips }) => {

    const createScoreRecord = (player, time, flips) => {
        return (
            {
                id: uniqid(),
                player,
                time,
                flips,
            }
        )
    }

    const storage = new ScoreStorage();
    const repository = new ScoreRepository(storage);
    let scoreList = [];

    const actualScore = createScoreRecord(playerName, timeGame, totalFlips);


        if (actualScore.time) {
            // console.log(actualScore);
            repository.add(actualScore);
        }
        scoreList = repository.getAll();
        scoreList = scoreList.map((item, index) => (
            <ListItem
                key={item.id}
                id={item.id}
                player={item.player}
                time={item.time}
                index={item.index}
            />))
        
        const result = scoreList.find(item => item.key === actualScore.id  
        
        )
            console.log(result);
       
    return (
        <>
            <div className="table">
                <ul className="scoreList">
                    {scoreList}
                    <li>
                        {!result &&                         <h2>
                            <p>{playerName}</p>
                            <span>{convertTime(actualScore.time)}</span>
                        </h2>
                        }

                    </li>
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    const { playerName, timeGame, totalFlips } = state;
    return { playerName, timeGame, totalFlips };
}

export default connect(mapStateToProps)(ScoreList);