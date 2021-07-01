import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { endGame } from '../../actions';


import ScoreList from '../../components/ScoreList/ScoreList.jsx';


const Table = styled.div`
    width: 100%;
    max-width: 600px;
    min-height: 50%;
    margin: auto;
    border: solid teal 2px;
`

const StyledWrapper = styled.div`
    display: flex;
    margin: 25px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .button {
        margin-top: 25px;
        padding: 10px 25px;
        border: solid 1px blue;
        color: blue;
        text-decoration: none;
    }
`

const EndView = ({ endGame }) => (
    <>
        <StyledWrapper>
            <h1>Best of the best</h1>
            <Table>
                <ScoreList />
            </Table>
            <Link to="/" className="button" onClick={endGame}> New game </Link>
        </StyledWrapper>
    </>
)

const mapDispatchToProps = dispatch => ({
    endGame: () => dispatch(endGame()),
})

export default connect(null, mapDispatchToProps)(EndView);