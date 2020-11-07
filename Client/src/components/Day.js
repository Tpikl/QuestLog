import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import './Day.scss';

export const Day = (props) => {
    async function completeEntry(entry) {
        axios.put('api/entry/update', {...entry, completed: !entry.completed})
        .then(() => props.update());
    }

    return (
        <div className='day'>
            <div className='dayHeader'>
                <h3>{format(props.day, 'do - eeee')}</h3>
                <button onClick={props.click}>Add</button>
            </div>
            <hr />

            <b>Entries:</b>

            <div className='entries'>
                <ul>
                    {props.entries.map(x => {return (
                        <span key={x.id} style={x.completed ? {textDecoration: 'line-through'}:{}} onClick={() => completeEntry(x)}>
                            <li>
                                <b>{x.title}</b><br />
                                <small>{x.description}</small>
                            </li>
                        </span>
                    )})}
                </ul>
            </div>

        </div>
    );
}