import React from 'react';
import { format } from 'date-fns';
import { Entry } from './Entry';
import './Day.scss';

export const Day = (props) => {
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
                        <Entry key={x.id} entry={x} update={props.update} />
                    )})}
                </ul>
            </div>

        </div>
    );
}