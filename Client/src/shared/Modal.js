import React, { useEffect } from 'react'
import './Modal.scss'

const MODAL_ID = 'theModal';
const GetModal = () => document.getElementById(MODAL_ID)

export const Modal = (props) => {
    window.onclick = function(e) {
        if (e.target === GetModal()) HideModal();
    }

    return (
        <div id={MODAL_ID} className='modal'>
            <div className='modal-content'>

                <div className='closeWrap'><span className="close" onClick={() => HideModal()}>&times;</span></div>
                {props.children}

            </div>
        </div>
    );
}
export function ShowModal() {
    GetModal().style.display = "block";
}
export function HideModal() {
    GetModal().style.display = "none";
}