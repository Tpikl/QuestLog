import React from 'react';
import { Entry } from './Entry';
import { InitialState } from '../state/entry';

const Notes = ({entries, onSelect, onUpdate}) => {


    return (
        <div className='notes'>
            <div className='titleHeader pointer'>
                <h3>Notes:</h3>&nbsp;&nbsp;
                <div className='flexCenter'>
                    <i className='addBtn pointer far fa-plus-square' onClick={() => {onSelect({...InitialState, date: new Date(), displayArea: 2})}}></i>
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
export default Notes;