import React, { useState, useEffect } from 'react';
import { addDays, isToday } from 'date-fns';
import { Modal } from '../shared/Modal';
import { InitialState, DisplayAreas } from '../state/entry';
import { ByDateRange } from '../api/entry';
import { EntryForm } from '../forms/EntryForm';
import { endOfThisWeek, startOfThisWeek, weekDays, weeklyFormat } from '../util/weekDays';
import EntryList from '../components/EntryList';
import { StyledEntryList } from '../components/EntryList.styled';
import StyledWeekly from './Weekly.styled';
import SpreadNav from '../components/SpreadNav';


const Weekly = () => {
    // Handle weeklyDate
    const [weeklyDate, setWeeklyDate] = useState(new Date());
    useEffect(() => weeklyInit(), [weeklyDate]);

    // Initialize Weekly data.
    const [weekEntries, setWeekEntries] = useState([]);
    function weeklyInit() {
        ByDateRange(startOfThisWeek(weeklyDate), endOfThisWeek(weeklyDate))
        .then(r => {
            setWeekEntries(r.data.map(e =>
                ({...e, date: new Date(e.date)})
            ));
        });
    }

    const entriesByDay = (day) => {
        let e = [];
        weekEntries.forEach(item => {
            if (item.date.getDay() === day && item.displayArea === DisplayAreas.Day.id)
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

    return (
        <StyledWeekly>
            <center><h1>-Weekly Spread-</h1></center>

            <SpreadNav onClickLeft={() => setWeeklyDate(addDays(weeklyDate, -7))}
                        onClickRight={() => setWeeklyDate(addDays(weeklyDate, 7))} />

            <div className='weekSpread'>

                <div className='weekly'>
                    {weekDays(weeklyDate).map((item, i) => {
                        return (
                            <StyledEntryList key={i} boldTitle={isToday(item)}>
                                <EntryList
                                    area={{...DisplayAreas.day, name: weeklyFormat(item)}}
                                    day={item}
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
                            area={DisplayAreas.Todo}
                            day={null}
                            entries={entriesByArea(DisplayAreas.Todo.id)}
                            onSelect={selectModal}
                            onUpdate={() => weeklyInit()}/>
                        <EntryList
                            area={DisplayAreas.Note}
                            day={null}
                            entries={entriesByArea(DisplayAreas.Note.id)}
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
        </StyledWeekly>
    );
};
export default Weekly;