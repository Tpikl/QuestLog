import { endOfWeek, format, startOfWeek } from 'date-fns';
import React from 'react';
import { monthsByCount, monthWeeks } from '../util/weekDays';

const Home = ({date, setDate}) => {
    const nav = (d, loc) => {
        setDate(d);
        window.location = loc;
    }

    return (<>
        <center>
            <h1>-Home page-</h1>

            <div>
                <h3>Index:</h3>

                {monthsByCount(date, 3).map((item, i) => {
                    return (<div key={i}>
                        <div onClick={() => nav(item, '/Monthly')}>{format(item, 'MMMM - yy')}</div>
                        {monthWeeks(item).map((it, ii) => {
                            return (
                                <div key={ii} onClick={() => nav(it, '/Weekly')}>{format(startOfWeek(it), 'MMM do')} - {format(endOfWeek(it), 'do, yyyy')}</div>
                            )
                        })}
                    </div>)
                })}
            </div>
        </center>
    </>);
};
export default Home;