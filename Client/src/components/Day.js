import React from 'react';
import { format } from 'date-fns';
import { Entry } from './Entry';
import './Day.scss';

export const Day = ({day, entries, addEntry, editEntry, updateSpread}) => {
    return (
        <div className='day'>

            <div className='dayHeader pointer'>
                <h3>[{format(day, 'do')}] - {format(day, 'eeee')}</h3>&nbsp;&nbsp;
                <div className='flexCenter'>
                    <i className='addBtn pointer far fa-plus-square' onClick={addEntry}></i>
                </div>
            </div>

            <div className='entries'>
                {entries.map(x => {return (
                    <Entry key={x.id} entry={x} setFormEntry={editEntry} updateSpread={updateSpread} />
                )})}
            </div>

        </div>
    );
}