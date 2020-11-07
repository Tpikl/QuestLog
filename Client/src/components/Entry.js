import React from 'react';
import axios from 'axios';
import './Entry.scss';

export const Entry = (props) => {
    async function completeEntry() {
        axios.put('api/entry/update', {...props.entry, completed: !props.entry.completed})
        .then(() => props.update());
    }

    async function deleteEntry() {
        axios.delete(`api/entry/${props.entry.id}`)
        .then(() => props.update());
    }

    return (
        <div className='entry'>
            <div className='entryTitle'>
                <span onClick={() => completeEntry()}>
                    <b style={props.entry.completed ? {textDecoration: 'line-through'}:{}}>{props.entry.title}</b>
                </span>
                <div onClick={() => deleteEntry()}>X</div>
            </div>
            <small style={props.entry.completed ? {textDecoration: 'line-through'}:{}}>{props.entry.description}</small>
        </div>
    )
}