import React from 'react';
import { connect } from 'react-redux';

const TotalFlips = ({ totalFlips }) => <p>Flips: {totalFlips}</p>


const mapStateToProps = state => {
    const { totalFlips } = state;
    return { totalFlips };
}

export default connect(
    mapStateToProps
    )(TotalFlips);
