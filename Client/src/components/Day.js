import React from 'react';

import { Modal } from '../shared/Modal';

import './Day.scss';

export const Day = (props) => {
    let modal = document.getElementById("myModal");

    return (
        <div className='day'>
            <div className='dayHeader'>
                <h3>{props.day}</h3>
                <button onClick={() => {modal.style.display = "block";}}>Add Entry</button>
            </div>
            <hr />

            <b>Entries:</b>
            <div className='entries'>
                <ul>
                    {props.entries.map(x => {return (<li>{`${x.title} - ${x.description}`}</li>)})}
                </ul>
            </div>

            <Modal />
        </div>
    );
}