import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Entry } from './Entry';
import { InitialState } from '../state/entry';
import './Day.scss';

export const Day = ({day, entries, onSelect, onUpdate}) => {
    return (
        <div className='day'>

            <div className='dayHeader pointer'>
                <h3>[{format(day, 'do')}] - {format(day, 'eeee')}</h3>&nbsp;&nbsp;
                <div className='flexCenter'>
                    <i className='addBtn pointer far fa-plus-square' onClick={() => {onSelect({...InitialState, date: day})}}></i>
                </div>
            </div>

            <div className='entries'>
                {entries.map(x => {return (
                    <Entry key={x.id} entry={x} onSelect={onSelect} onUpdate={onUpdate} />
                )})}
            </div>

        </div>
    );
};

Day.propTypes = {
    day: PropTypes.object,
    entries: PropTypes.array,
    onSelect: PropTypes.func,
    onUpdate: PropTypes.func,
};