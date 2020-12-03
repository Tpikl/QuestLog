import React, { useState, useEffect } from 'react';
import { addDays, endOfWeek, isToday, startOfWeek } from 'date-fns';

import { DisplayAreas } from '../state/entry';
import { entryApi } from '../api/entry';
import { baseFormat, weekDays, weeklyFormat, weeklySpreadFormat } from '../util';
import EntryList from '../components/EntryList';
import StyledEntryList from '../components/EntryList.styled';
import StyledWeekly from './Weekly.styled';
import SpreadNav from '../components/SpreadNav';
import useAxios from '../api/useAxios';


const Weekly = ({date, setDate, selectModal}) => {
    const [weeklyDate, setWeeklyDate] = useState(date);
    useEffect(() => startOfWeek(setWeeklyDate(date)), [date]);

    const { response } = useAxios({
        api: entryApi,
        method: 'get',
        url: `/ByDateRange/?start=${baseFormat(weeklyDate)}&end=${baseFormat(endOfWeek(weeklyDate))}`,
        config: JSON.stringify({ timeStamp: weeklyDate})
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

    return (
        <StyledWeekly>
            <center>
                <h1>-Weekly Spread-</h1>
                <h2>{weeklySpreadFormat(weeklyDate)}</h2>
            </center>

            <SpreadNav onClickLeft={() => setDate(addDays(weeklyDate, -7))}
                        onClickRight={() => setDate(addDays(weeklyDate, 7))} />

            <div className='weekSpread'>

                <div className='weekly'>
                    {weekDays(date).map((item, i) => {
                        return (
                            <StyledEntryList key={i} boldTitle={isToday(item)}>
                                <EntryList
                                    area={{...DisplayAreas.day, name: weeklyFormat(item)}}
                                    day={item}
                                    entries={entriesByDay(i)}
                                    onSelect={selectModal}
                                    onUpdate={() => setDate(weeklyDate)}/>
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
                            onUpdate={() => setDate(weeklyDate)}/>
                        <EntryList
                            area={DisplayAreas.Note}
                            day={null}
                            entries={entriesByArea(DisplayAreas.Note.id)}
                            onSelect={selectModal}
                            onUpdate={() => setDate(weeklyDate)}/>
                    </StyledEntryList>
                </div>

            </div>
        </StyledWeekly>
    );
};
export default Weekly;