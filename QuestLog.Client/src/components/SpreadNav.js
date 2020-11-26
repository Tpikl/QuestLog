import React from 'react';
import StyledSpreadNav from './SpreadNav.styled';

const SpreadNav = ({onClickLeft, onClickRight}) => {

    return (
        <StyledSpreadNav>
            <button onClick={() => onClickLeft()}>{'<<'}</button>
            <button onClick={() => onClickRight()}>{'>>'}</button>
        </StyledSpreadNav>
    );
};
export default SpreadNav;