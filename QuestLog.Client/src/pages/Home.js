import React from 'react';
import { Link } from 'react-router-dom';
import { monthlyFormat, monthsByCount, monthWeeks, shortWeeklyFormat } from '../util';
import StyledHome from './Home.styled';

const Home = ({setDate}) => {
    return (
        <StyledHome>
            <h1>-Home page-</h1>

            <div>
                <h3>Index:</h3>

                {monthsByCount(new Date(), 3).map((month, i) => { return (
                    <div key={i} className='monthGroup'>
                        <Link className='monthLink' to='/Monthly' onClick={() => setDate(month)}>{monthlyFormat(month)}</Link>

                        {monthWeeks(month).map((week, ii) => { return (
                            <Link key={ii} to='/Weekly' onClick={() => setDate(week)}>{shortWeeklyFormat(week)}</Link>
                        )})}
                    </div>
                )})}
            </div>
        </StyledHome>
    );
};
export default Home;