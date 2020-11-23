import React, { useState } from 'react';
import { addDays } from 'date-fns';
import { Weekly } from '../spreads/Weekly';

import './Home.scss';

export const Home = () => {
    const [weekDate, setWeekDate] = useState(new Date());

    return (<>
        <center><h1>-Weekly Spread-</h1></center>

        <div className='weeklyNav'>
            <button onClick={() => setWeekDate(addDays(weekDate, -7))}>{'<<'}</button>
            <button onClick={() => setWeekDate(addDays(weekDate, 7))}>{'>>'}</button>
        </div>

        <Weekly startDate={weekDate} />
    </>);
};