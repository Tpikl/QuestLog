import React from 'react';
import './Day.scss';

export const Day = (props) => {

    return (
        <div className='day'>
            <div className='dayHeader'>
                <h3>{props.day.format('Do - dddd')}</h3>
                <button onClick={props.click}>Add Entry</button>
            </div>
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