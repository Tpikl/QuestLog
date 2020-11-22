import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../shared/Modal';
import { InitialState } from '../state/entry';
import { ByDateRange } from '../api/entry';
import { EntryForm } from '../forms/EntryForm';
import { endOfThisWeek, startOfThisWeek, weekDays } from '../util/weekDays';
import { format } from 'date-fns';
import EntryList from '../components/EntryList';

import './Weekly.scss';


export const Weekly = ({startDate}) => {
    // Handle startDate
    useEffect(() => weeklyInit(), [startDate]);

    // Initialize Weekly data.
    const [weekEntries, setWeekEntries] = useState([]);
    function weeklyInit() {
        ByDateRange(startOfThisWeek(startDate), endOfThisWeek(startDate))
        .then(r => {
            setWeekEntries(r.data.map(e =>
                ({...e, date: new Date(e.date)})
            ));
        });
    }

    const entriesByDay = (day) => {
        let e = [];
        weekEntries.forEach(item => {
            if (item.date.getDay() === day && item.displayArea === 0)
                e.push(item);
        });
        return e;
    };

    const entriesByToDo = () => {
        let e = [];
        weekEntries.forEach(item => {
            if (item.displayArea === 1) e.push(item);
        });
        return e;
    };
    const entriesByNotes = () => {
        let e = [];
        weekEntries.forEach(item => {
            if (item.displayArea === 2) e.push(item);
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

    const today = (day) => {
        return format(new Date(), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
            ? 'dayTitle' : '';
    };

    return (<>
        <center><h1>-Weekly Spread-</h1></center>
        <div className='weekSpread'>

            <div className='weekly'>
                {weekDays(startDate).map((item, i) => {
                    return (
                        <EntryList
                            key={i}
                            area={`[${format(item, 'do')}] - ${format(item, 'eeee')}`}
                            num={0}
                            styleOption={today(item)}
                            entries={entriesByDay(i)}
                            onSelect={selectModal}
                            onUpdate={() => weeklyInit()}/>
                    )
                })}
            </div>

            <div className='side'>
                <EntryList
                    area={'To Do'}
                    num={1}
                    styleOption={''}
                    entries={entriesByToDo()}
                    onSelect={selectModal}
                    onUpdate={() => weeklyInit()}/>
                <EntryList
                    area={'Notes'}
                    num={2}
                    styleOption={''}
                    entries={entriesByNotes()}
                    onSelect={selectModal}
                    onUpdate={() => weeklyInit()}/>
            </div>

        </div>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <EntryForm
                entry={selectedEntry}
                onUpdate={() => {weeklyInit(); setModalOpen(false);}} />
        </Modal>
    </>);
};

Weekly.propTypes = {
    startDate: PropTypes.instanceOf(Date)
};