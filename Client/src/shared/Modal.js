import React from 'react'

import './Modal.scss'

export const Modal = (props) => {
    let modal = document.getElementById("myModal");

    const closeModal = () => {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) closeModal();
    }

    return (
        <div id='myModal' className='modal'>
            <div className='modal-content'>

                <div className='closeWrap'><span className="close" onClick={() => closeModal()}>&times;</span></div>
                {props.children}

            </div>
        </div>
    );
}