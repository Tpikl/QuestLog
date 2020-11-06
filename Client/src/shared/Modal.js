import React, { useState } from 'react'
import axios from 'axios';

import './Modal.scss'

export const Modal = () => {
    let modal = document.getElementById("myModal");

    let form = {
        title: 'asd',
        description: 'lkjsaflkialkjflkaif',
        date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
    }

    const closeModal = () => {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) closeModal();
    }

    const submitForm = () => {
        axios.post('api/entry/add', form);
    }

    return (
        <div id='myModal' className='modal'>
            <div className='modal-content'>
                <span class="close" onClick={() => closeModal()}>&times;</span>

                <form onSubmit={() => submitForm()}>

                    <label for="title">Title: </label>
                    <input id="title" type='text' />

                    <label for="description">Description: </label>
                    <input id="description" type='text' />

                    <label for="date">Date: </label>
                    <input id="date" type='text' />

                    <input type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
}