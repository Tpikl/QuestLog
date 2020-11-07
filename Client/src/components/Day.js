import React from 'react';
import { format } from 'date-fns';
import { Entry } from './Entry';
import './Day.scss';

export const Day = ({day, entries, update, addEntry, editEntry}) => {
    return (
        <div className='day'>
            <div className='dayHeader'>
                <h3>{format(day, 'do - eeee')}</h3>
                <button onClick={addEntry}>Add</button>
            </div>
            <hr />

            <b>Entries:</b>
            <div className='entries'>
                <ul>
                    {entries.map(x => {return (
                        <Entry key={x.id} entry={x} update={update} setFormEntry={editEntry} />
                    )})}
                </ul>
            </div>

        </div>
    );
}