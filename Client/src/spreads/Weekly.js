import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isToday } from 'date-fns';
import { Modal } from '../shared/Modal';
import { InitialState, DisplayAreas } from '../state/entry';
import { ByDateRange } from '../api/entry';
import { EntryForm } from '../forms/EntryForm';
import { endOfThisWeek, startOfThisWeek, weekDays, weeklyFormat } from '../util/weekDays';
import EntryList from '../components/EntryList';
import { StyledEntryList } from '../components/EntryList.styled';

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
            if (item.date.getDay() === day && item.displayArea === DisplayAreas.day)
                e.push(item);
        });
        return e;
    };
    const entriesByArea = (area) => {
        let e = [];
        weekEntries.forEach(item => {
            if (item.displayArea === area) e.push(item);
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
        <center><h1>-Weekly Spread-</h1></center>
        <div className='weekSpread'>

            <div className='weekly'>
                {weekDays(startDate).map((item, i) => {
                    return (
                        <StyledEntryList boldTitle={isToday(item)}>
                            <EntryList
                                key={i}
                                area={weeklyFormat(item)}
                                num={0}
                                entries={entriesByDay(i)}
                                onSelect={selectModal}
                                onUpdate={() => weeklyInit()}/>
                        </StyledEntryList>
                    )
                })}
            </div>

            <div className='side'>
                <StyledEntryList boldTitle={true}>
                    <EntryList
                        area={'To Do'}
                        num={1}
                        entries={entriesByArea(DisplayAreas.week)}
                        onSelect={selectModal}
                        onUpdate={() => weeklyInit()}/>
                    <EntryList
                        area={'Notes'}
                        num={2}
                        entries={entriesByArea(DisplayAreas.note)}
                        onSelect={selectModal}
                        onUpdate={() => weeklyInit()}/>
                </StyledEntryList>
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