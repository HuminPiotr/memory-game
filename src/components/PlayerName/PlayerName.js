import React from 'react';
import { connect } from 'react-redux';

const PlayerName = ({ playerName }) => <h2>{playerName}</h2>


const mapStateToProps = state => {
    const { playerName } = state;
    return { playerName };
}

export default connect(
    mapStateToProps
    )(PlayerName);
