import React from 'react';
import './style.css';

import { convertTime } from '../../functions/convertTime';

const ListItem = ({player, time}) => (
    <li className="listItem">
            { player } &nbsp;
            <span className="listItem__time">{ convertTime(time) }</span>
    </li>
)

export default ListItem;