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
const Background = styled.div`
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
    background-repeat: repeat;
    animation: bg-animation .2s infinite;
    opacity: .9;
    visibility: visible;
    z-index: -1;

    @keyframes bg-animation {
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
}


`

const StyledWrapper = styled.div`
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: var(--secondary);

    .button {
        margin-top: 25px;
        padding: 10px 25px;
        border: solid 1px blue;
        color: blue;
        text-decoration: none;
        border-radius: 20px;
    }
`



const EndView = ({ endGame }) => (
    <>
        <Background /> 
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