import React, { useState, useEffect } from 'react';
import { startOfWeek, addDays } from 'date-fns';
import { Day } from '../components/Day';
import { Modal, ShowModal, HideModal } from '../shared/Modal';
import { EntryForm } from '../forms/EntryForm';
import { GetEntriesByUserId } from '../api/Entry';
import { TEST_USER_ID } from '../Const';
import PropTypes from 'prop-types';
import { InitialState } from '../state/EntryFormState';
import './Weekly.scss';

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
        GetEntriesByUserId(TEST_USER_ID)
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

Day.propTypes = {
    data: PropTypes.object,
    addEntry: PropTypes.func,
    editEntry: PropTypes.func,
    entries: PropTypes.array,
    update: PropTypes.func,
}

EntryForm.propTypes = {
    entry: PropTypes.object,
    update: PropTypes.func
}