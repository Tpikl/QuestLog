import React, { useState, useEffect } from 'react';
import { addDays, endOfWeek, format, isToday, startOfWeek } from 'date-fns';
import { Modal } from '../shared/Modal';
import { InitialState, DisplayAreas } from '../state/entry';
import { entryApi } from '../api/entry';
import { EntryForm } from '../forms/EntryForm';
import { weekDays, weeklyFormat } from '../util/weekDays';
import EntryList from '../components/EntryList';
import { StyledEntryList } from '../components/EntryList.styled';
import StyledWeekly from './Weekly.styled';
import SpreadNav from '../components/SpreadNav';
import useAxios from '../api/useAxios';


const Weekly = () => {
    // Handle weeklyDate
    const [weeklyDate, setWeeklyDate] = useState(startOfWeek(new Date()));

    const [timeStamp, setTimeStamp] = useState(new Date());
    const { response } = useAxios({
        api: entryApi,
        method: 'get',
        url: `/ByDateRange/?start=${format(weeklyDate, 'yyyy-MM-dd')}&end=${format(endOfWeek(weeklyDate), 'yyyy-MM-dd')}`,
        config: JSON.stringify({ timeStamp: timeStamp})
    });
    const [weekEntries, setWeekEntries] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setWeekEntries(response.map(e =>
                ({...e, date: new Date(e.date)})));
        }
    }, [response]);

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
            <center>
                <h1>-Weekly Spread-</h1>
                <h2>{format(startOfWeek(weeklyDate), 'MMM do')} - {format(endOfWeek(weeklyDate), 'do, yyyy')}</h2>
            </center>

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
                                    onUpdate={() => setTimeStamp(new Date())}/>
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
                            onUpdate={() => setTimeStamp(new Date())}/>
                        <EntryList
                            area={DisplayAreas.Note}
                            day={null}
                            entries={entriesByArea(DisplayAreas.Note.id)}
                            onSelect={selectModal}
                            onUpdate={() => setTimeStamp(new Date())}/>
                    </StyledEntryList>
                </div>

            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <EntryForm
                    entry={selectedEntry}
                    onUpdate={() => {setTimeStamp(new Date()); setModalOpen(false);}} />
            </Modal>
        </StyledWeekly>
    );
};
export default Weekly;