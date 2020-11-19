import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Entry } from './Entry';
import { InitialState } from '../state/entry';
import './Day.scss';

export const Day = ({day, entries, onSelect, onUpdate}) => {
    const today = () => {
        return format(new Date(), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
            ? 'dayTitle' : '';
    };

    return (
        <div className='day'>

            <div className='titleHeader pointer'>
                <div className={today()}>[{format(day, 'do')}] - {format(day, 'eeee')}</div>&nbsp;&nbsp;
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