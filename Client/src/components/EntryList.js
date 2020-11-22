import React from 'react';
import { Entry } from './Entry';
import { InitialState } from '../state/entry';

const EntryList = ({area, num, style, entries, onSelect, onUpdate}) => {

    return (
        <div className='todo'>
            <div className='titleHeader pointer'>
                <div className={style}>{area}:</div>&nbsp;&nbsp;
                <div className='flexCenter'>
                    <i className='addBtn pointer far fa-plus-square' onClick={() => {onSelect({...InitialState, date: new Date(), displayArea: num})}}></i>
                </div>
            </div>

            <div>
                {entries.map(x => {return (
                        <Entry key={x.id} entry={x} onSelect={onSelect} onUpdate={onUpdate} />
                    )})}
            </div>
        </div>
    );
}

export default EntryList;