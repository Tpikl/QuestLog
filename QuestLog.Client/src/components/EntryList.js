import React from 'react';
import { Entry } from './Entry';
import { InitialState } from '../state/entry';
import CustomButton, { ButtonTypes } from '../controls/CustomButton';

const EntryList = ({area, day, entries, onSelect, onUpdate}) => {
    const onAdd = () =>
        onSelect({...InitialState,
            date: day ? day : new Date(),
            displayArea: area.id});

    return (
        <div className='entryList'>
            <div className='titleHeader pointer'>
                <div className={'title'}>{area.name}:</div>&nbsp;&nbsp;
                <div className='flexCenter'>
                    <CustomButton buttonType={ButtonTypes.Add} onClick={() => onAdd()}/>
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