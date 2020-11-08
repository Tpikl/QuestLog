import React, { useState, useEffect } from 'react';
import { Modal } from '../shared/Modal';
import { InitialState } from '../state/entry';
import { ByDateRange } from '../api/entry';
import { EntryForm } from '../forms/EntryForm';
import { endOfThisWeek, startOfThisWeek, weekDays } from '../util/weekDays';
import { Day } from '../components/Day';

import './Weekly.scss';


export const Weekly = () => {
    // Run init on first draw.
    useEffect(() => weeklyInit(), []);

    // Initialize Weekly data.
    const [weekEntries, setWeekEntries] = useState([]);
    function weeklyInit() {
        ByDateRange(startOfThisWeek(), endOfThisWeek())
        .then(r => {
            setWeekEntries(r.data.map(e =>
                ({...e, date: new Date(e.date)})
            ));
        });
    }

    const entriesByDay = (day) => {
        let e = [];
        weekEntries.forEach(item => {
            if (item.date.getDay() === day) e.push(item);
        });
        return e;
    };

    // Modal control
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState({...InitialState});
    const selectModal = (entry) => {
        setSelectedEntry(entry);
        setModalOpen(true);
    };

    return (<>
        <center><h1>-Weekly-</h1></center>

        <div className='weekly'>
            {weekDays(new Date()).map((item, i) => {
                return (<Day 
                    key={i}
                    day={item}
                    entries={entriesByDay(i)}
                    onSelect={selectModal}
                    onUpdate={() => weeklyInit()} />)
            })}
        </div>

        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <EntryForm
                entry={selectedEntry}
                onUpdate={() => {weeklyInit(); setModalOpen(false);}} />
        </Modal>
    </>);
};