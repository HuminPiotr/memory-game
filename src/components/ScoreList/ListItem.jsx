import React from 'react';

import * as Styled from './ScoreList.styled';
import { convertTime } from '../../utils/convertTime';



const ListItem = ({ player, time, isActual }) => (
    <Styled.ListItem isActual={isActual}>
            { player } &nbsp;
            <span className={"listItem__time"}>{ convertTime(time) }</span>
    </Styled.ListItem>
)

export default ListItem;