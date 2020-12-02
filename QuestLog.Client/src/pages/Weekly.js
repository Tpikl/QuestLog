import React, { useState, useEffect } from 'react';
import { addDays, endOfWeek, format, isToday, startOfWeek } from 'date-fns';
import { DisplayAreas } from '../state/entry';
import { entryApi } from '../api/entry';
import { weekDays, weeklyFormat } from '../util/weekDays';
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
        url: `/ByDateRange/?start=${format(weeklyDate, 'yyyy-MM-dd')}&end=${format(endOfWeek(weeklyDate), 'yyyy-MM-dd')}`,
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
                <h2>{format(weeklyDate, 'MMM do')} - {format(endOfWeek(weeklyDate), 'do, yyyy')}</h2>
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