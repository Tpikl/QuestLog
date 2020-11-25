import React from 'react';
import { StyledCustomButton } from './CustomButton.styled';

const CustomButton = ({buttonType, onClick}) => {
    return (
        <StyledCustomButton
            buttonType={buttonType.style}
            className={`pointer ${buttonType.type}`}
            onClick={onClick}>
        </StyledCustomButton>
    );
};
export default CustomButton;


export const ButtonTypes = {
    Add: {type: 'far fa-plus-square',
        style: ({theme}) => theme.primaryGreen},
    Edit: {type: 'far fa-edit',
        style: ({theme}) => theme.primaryDark},
    Delete: {type: 'far fa-window-close',
        style: ({theme}) => theme.primaryRed},
};