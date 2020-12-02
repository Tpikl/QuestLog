import React, { useState, useEffect } from 'react';
import { addMonths, endOfMonth, format, startOfMonth } from 'date-fns';

import SpreadNav from '../components/SpreadNav';
import StyledMonthly from './Monthly.styled';
import { monthDays, weeklyFormat } from '../util/weekDays';
import EntryList from '../components/EntryList';
import { DisplayAreas } from '../state/entry';
import { entryApi } from '../api/entry';
import StyledEntryList from '../components/EntryList.styled';
import useAxios from '../api/useAxios';

const Monthly = ({date, setDate, selectModal}) => {
    const [monthlyDate, setMonthlyDate] = useState(date);
    useEffect(() => startOfMonth(setMonthlyDate(date)), [date]);

    const { response } = useAxios({
        api: entryApi,
        method: "get",
        url: `/ByDateRange/?start=${format(monthlyDate, 'yyyy-MM-dd')}&end=${format(endOfMonth(monthlyDate), 'yyyy-MM-dd')}`,
        config: JSON.stringify({ timeStamp: monthlyDate })
      });
      const [data, setData] = useState([]);

      useEffect(() => {
        if (response !== null) {
            setData(response.map(e =>
                ({...e, date: new Date(e.date)})));
        }
      }, [response]);

    const entriesByDay = (day) => {
        let e = [];
        data.forEach(item => {
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

            <SpreadNav onClickLeft={() => setDate(addMonths(monthlyDate, -1))}
                        onClickRight={() => setDate(addMonths(monthlyDate, 1))} />

            <div className='monthList'>
                {monthDays(monthlyDate).map((item, i) => {
                    return (
                        <StyledEntryList key={i} boldTitle={false}>
                        <EntryList
                            area={{...DisplayAreas.day, name: weeklyFormat(item)}}
                            day={item}
                            entries={entriesByDay(i+1)}
                            onSelect={selectModal}
                            onUpdate={() => setDate(monthlyDate)}/>
                    </StyledEntryList>)
                })}
            </div>
        </StyledMonthly>
    );
};
export default Monthly;