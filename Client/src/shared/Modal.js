import React, { useState } from 'react'
import axios from 'axios';

import './Modal.scss'

export const Modal = () => {
    let modal = document.getElementById("myModal");
    const [form, setForm] = useState(
        {
            title: '',
            description: '',
            date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
        }
    )

    const closeModal = () => {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) closeModal();
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
                    <input id="title" type='text' value={form.title} onChange={e => setForm({...form, title: e.target.value})} />

                    <label for="description">Description: </label>
                    <input id="description" type='text' value={form.description} onChange={e => setForm({...form, description: e.target.value})} />

                    <input type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
}