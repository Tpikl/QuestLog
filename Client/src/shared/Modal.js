import React, { useEffect } from 'react'
import PropTypes from  'prop-types';
import './Modal.scss'

const MODAL_ID = 'THE_MODAL';

export const Modal = ({children, open, onClose}) => {
    window.onclick = function(e) {
        if (e.target === getModal()) onClose();
        if (e.target.parentElement === getModal()) onClose();  // Because of .flexCenter
    };

    return open && (
        <div id={MODAL_ID} className='modalWrap'>
            <div className='flexCenter'>
                <div className='modal'>

                    <div className='closeWrap'>
                        <i className='pointer far fa-window-close fa-lg' onClick={() => onClose()}></i>
                    </div>
                    <div className='modalContent'>
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
};
const getModal = () => document.getElementById(MODAL_ID);

Modal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
};