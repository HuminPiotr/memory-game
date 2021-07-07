import styled from 'styled-components';


export const ListItem = styled.li`
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: ${({ isActual }) => (isActual ? 'bold' : 100)};
`

export const ScoreList = styled.ul`
    list-style-type: decimal;
    text-align: left;
    text-align: center;
    display: inline-block;

    .scoreList__actualScore {
     padding-left: 25px;
     font-weight: bold;
}
`
