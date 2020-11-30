import React, { useState, useEffect } from 'react';
import { addMonths, endOfMonth, format, startOfMonth } from 'date-fns';

import SpreadNav from '../components/SpreadNav';
import StyledMonthly from './Monthly.styled';
import { monthDays, weeklyFormat } from '../util/weekDays';
import EntryList from '../components/EntryList';
import { DisplayAreas } from '../state/entry';
import { ByDateRange } from '../api/entry';
import { StyledEntryList } from '../components/EntryList.styled';

const Monthly = () => {
    const [monthlyDate, setMonthlyDate] = useState(startOfMonth(new Date()));
    useEffect(() => monthlyInit(), [monthlyDate]);

    // Initialize Monthly data.
    const [monthEntries, setMonthEntries] = useState([]);
    function monthlyInit() {
        ByDateRange(monthlyDate, endOfMonth(monthlyDate))
        .then(r => {
            setMonthEntries(r.data.map(e =>
                ({...e, date: new Date(e.date)})
            ));
        });
    }

    const entriesByDay = (day) => {
        let e = [];
        monthEntries.forEach(item => {
            if (item.date.getDate() === day && item.displayArea === DisplayAreas.Day.id)
                e.push(item);
        });
        return e;
    };

    return (
        <StyledMonthly>
            <center>
                <h1>-Monthly Spread-</h1>
                <h2>{format(monthlyDate, 'MMMM, yyyy')}</h2>
            </center>

            <SpreadNav onClickLeft={() => setMonthlyDate(addMonths(monthlyDate, -1))}
                        onClickRight={() => setMonthlyDate(addMonths(monthlyDate, 1))} />

            <div className='MonthList'>
                {monthDays(monthlyDate).map((item, i) => {
                    return (
                        <StyledEntryList key={i} boldTitle={false}>
                        <EntryList
                            area={{...DisplayAreas.day, name: weeklyFormat(item)}}
                            day={item}
                            entries={entriesByDay(i+1)}
                            onSelect={() => {}}
                            onUpdate={() => {}}/>
                    </StyledEntryList>)
                })}
            </div>
        </StyledMonthly>
    );
};
export default Monthly;