import React from 'react';
import * as Styled from './Header.styled'

const Header = ({children}) => (
    <Styled.Header>
        {children}
    </Styled.Header>
)


export default Header;