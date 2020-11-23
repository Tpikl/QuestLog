import React from 'react';
import { Entry } from './Entry';
import { InitialState } from '../state/entry';

const EntryList = ({area, num, day, entries, onSelect, onUpdate}) => {
    const onAdd = () => 
        onSelect({...InitialState,
            date: day ? day : new Date(),
            displayArea: num});

    return (
        <div className='entryList'>
            <div className='titleHeader pointer'>
                <div className={'title'}>{area}:</div>&nbsp;&nbsp;
                <div className='flexCenter'>
                    <i className='addBtn pointer far fa-plus-square' onClick={() => onAdd()}></i>
                </div>
            </div>

            <div className='entries'>
                {entries.map(x => {return (
                        <Entry key={x.id} entry={x} onSelect={onSelect} onUpdate={onUpdate} />
                    )})}
            </div>
        </div>
    );
}

export default EntryList;