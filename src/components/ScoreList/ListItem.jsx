import React from 'react';
import styled from 'styled-components';

import { convertTime } from '../../utils/convertTime';

// style
const StyledListItem = styled.li`
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: ${({ isActual }) => (isActual ? 'bold' : 100)};


`

const ListItem = ({ player, time, isActual }) => (
    <StyledListItem isActual={isActual}>
            { player } &nbsp;
            <span className={"listItem__time"}>{ convertTime(time) }</span>
    </StyledListItem>
)

export default ListItem;