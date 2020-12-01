import { endOfWeek, format, startOfWeek } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import { monthsByCount, monthWeeks } from '../util/weekDays';
import StyledHome from './Home.styled';

const Home = ({date, setDate}) => {
    return (
        <StyledHome>
            <h1>-Home page-</h1>

            <div>
                <h3>Index:</h3>

                {monthsByCount(date, 3).map((month, i) => { return (
                    <div key={i} className='monthGroup'>
                        <Link className='monthLink' to='/Monthly' onClick={() => setDate(month)}>{format(month, 'MMMM - yyyy')}</Link>

                        {monthWeeks(month).map((week, ii) => { return (
                            <Link key={ii} to='/Weekly' onClick={() => setDate(week)}>{format(startOfWeek(week), 'do')} - {format(endOfWeek(week), 'do')}</Link>
                        )})}
                    </div>
                )})}
            </div>
        </StyledHome>
    );
};
export default Home;