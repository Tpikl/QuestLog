import React, { useState } from 'react';
import { addMonths, format, startOfMonth } from 'date-fns';

import SpreadNav from '../components/SpreadNav';
import StyledMonthly from './Monthly.styled';
import { monthDays } from '../util/weekDays';

const Monthly = () => {
    const [monthlyDate, setMonthlyDate] = useState(startOfMonth(new Date()));

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
                        <div key={i}>{format(item, 'do -')}</div>
                    )
                })}
            </div>
        </StyledMonthly>
    );
};
export default Monthly;