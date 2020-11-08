import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal, ShowModal, HideModal } from '../shared/Modal';
import { InitialState } from '../state/EntryFormState';
import { GetEntriesByUserId } from '../api/Entry';
import { EntryForm } from '../forms/EntryForm';
import { WeekDays } from '../util/WeekDays';
import { Day } from '../components/Day';
import { TEST_USER_ID } from '../Const';

import './Weekly.scss';


export const Weekly = () => {
    // Initialize Weekly data.
    const [weekEntries, setWeekEntries] = useState([]);
    function WeeklyInit() {
        GetEntriesByUserId(TEST_USER_ID)
        .then(r => {
            setWeekEntries(r.data.map(e =>
                ({...e, date: new Date(e.date)})
            ));
        });

    }
    useEffect(() => {WeeklyInit()}, [])    // Run init on first draw.

    const entriesByDay = (day) => {
        let e = [];
        weekEntries.forEach(item => {
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
            {WeekDays().map((item, i) => {
                return (<Day 
                    key={i}
                    day={item}
                    entries={entriesByDay(i)}
                    addEntry={() => addEntry(item)}
                    editEntry={updateFormEntry}
                    update={() => WeeklyInit()} />)
            })}
        </div>

        <Modal>
            <EntryForm
                entry={formEntry}
                update={() => {WeeklyInit(); HideModal();}} />
        </Modal>
    </>);
}

Day.propTypes = {
    day: PropTypes.object,
    entries: PropTypes.array,
    addEntry: PropTypes.func,
    editEntry: PropTypes.func,
    update: PropTypes.func,
}

EntryForm.propTypes = {
    entry: PropTypes.object,
    update: PropTypes.func
}