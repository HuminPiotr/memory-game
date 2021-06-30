import React, {Component} from 'react';
import { connect } from 'react-redux';


import ScoreRepository from '../../store/ScoreRepository'
import ScoreStorage from '../../store/ScoreStorage';
import ListItem from './ListItem';

import './style.css'

class ScoreList extends Component {
    constructor(props){
        super(props);
        this.playerName = props.playerName;
        this.timeGame = props.timeGame;
        this.totalFlips = props.totalFlips;
        this.storage = new ScoreStorage();
        this.repository = new ScoreRepository(this.storage);
        console.log(this.timeGame);
        this.actualScore = this.createScoreRecord(this.playerName, this.timeGame, this.totalFlips);
        this.scoreList = [];
    }

    createScoreRecord = (player, time, flips) => (
        {
            id: `${player}_${time}`,
            player,
            time,
            flips
        }
    )

    componentDidMount(){

        this.repository.add(this.actualScore);
        this.scoreList = this.repository.getAll();
        this.scoreList = this.scoreList.map( (item) => (
            <ListItem
                key={item.id} 
                id={item.id} 
                player={item.player} 
                time={item.time}
            />))
    }

    componentDidUpdate(){

    }

    render(){
        return (
            <>
            <div className="table">
            <ul>
                {this.scoreListItems}
                <li>
                    <h2>
                        <p>{this.playerName}</p>
                        <span>{this.actualScore.time}</span>
                    </h2>
                </li>
            </ul>
            </div>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    const { playerName, timeGame, totalFlips } = state;
    return { playerName, timeGame, totalFlips };
}

export default connect(mapStateToProps)(ScoreList);