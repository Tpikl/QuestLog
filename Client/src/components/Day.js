import React from 'react';

import './Day.scss';

export const Day = (props) => {
    return (
        <div className='day'>
            <h3>{props.day}</h3>
            <hr />

            <b>Entries:</b>
            <div className='entries'>
                <ul>
                    {props.entries.map(x => {return (<li>{`${x.title} - ${x.description}`}</li>)})}
                </ul>
            </div>
        </div>
    );
}