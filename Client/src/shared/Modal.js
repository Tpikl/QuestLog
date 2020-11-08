import React from 'react'
import './Modal.scss'

const MODAL_ID = 'theModal';

export const Modal = ({children}) => {
    window.onclick = function(e) {
        if (e.target === GetModal()) HideModal();
        if (e.target.parentElement === GetModal()) HideModal();     // Because of .flexCenter
    }

    return (
        <div id={MODAL_ID} className='modalWrap'>
            <div className='flexCenter'>
                <div className='modal'>

                    <div className='closeWrap'>
                        <i className='pointer far fa-window-close fa-lg' onClick={() => HideModal()}></i>
                    </div>
                    <div className='modalContent'>
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
}
const GetModal = () => document.getElementById(MODAL_ID);
export function ShowModal() {
    GetModal().style.display = "block";
}
export function HideModal() {
    GetModal().style.display = "none";
}