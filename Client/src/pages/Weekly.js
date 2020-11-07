import React, { useState, useEffect } from 'react';
import { startOfWeek, addDays } from 'date-fns';
import { Day } from '../components/Day';
import { Modal, ShowModal, HideModal } from '../shared/Modal';
import { EntryForm } from '../forms/EntryForm';
import { GetEntries } from '../api/Entry';

import './Weekly.scss';
import { InitialState } from '../state/EntryFormState';

const WeekDays = () => {
    let weekDays = []
    let startDay = startOfWeek(new Date());

    for (let i = 0; i < 7; i++) {
        weekDays.push(addDays(startDay, i));
    }
    return weekDays;
}

export const Weekly = () => {
    let week = WeekDays();

    // Pull entries
    const [entries, setEntries] = useState([]);
    function pullEntries() {
        GetEntries()
        .then(r => {
            setEntries(r.data.map(e =>
                ({...e, date: new Date(e.date)})
            ));
        });

    }
    useEffect(() => {pullEntries()}, [])

    const entriesByDay = (day) => {
        let e = [];
        entries.forEach(item => {
            if (item.date.getDay() === day) e.push(item);
        });
        return e;
    };

    const [formEntry, setFormEntry] = useState({...InitialState});
    const addEntry = (day) => {
        setFormEntry({...InitialState, date: day});
        ShowModal();
    }
    const updateFormEntry = (entry) => {
        setFormEntry(entry);
        ShowModal();
    };

    return (<>
        <center><h1>-Weekly-</h1></center>

        <div className='weekly'>
            {week.map((item, i) => {
                return (<Day 
                    key={i}
                    day={item}
                    addEntry={() => addEntry(item)}
                    editEntry={updateFormEntry}
                    entries={entriesByDay(i)}
                    update={() => pullEntries()} />)
            })}
        </div>

        <Modal>
            <EntryForm
                entry={formEntry}
                update={() => {pullEntries(); HideModal();}} />
        </Modal>
    </>);
}