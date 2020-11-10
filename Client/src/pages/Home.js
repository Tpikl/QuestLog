import React, { useState } from 'react';
import { addDays } from 'date-fns';
import { Weekly } from '../spreads/Weekly';

import './Home.scss';

export const Home = () => {
    const [weekDate, setWeekDate] = useState(new Date());

    return (<>
        <div>
            <button onClick={() => setWeekDate(addDays(weekDate, -7))}>{'<<'}</button>
            <button onClick={() => setWeekDate(addDays(weekDate, 7))}>{'>>'}</button>
        </div>

        <Weekly startDate={weekDate} />
    </>);
};