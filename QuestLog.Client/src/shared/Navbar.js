import { startOfMonth, startOfWeek } from 'date-fns';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = ({date, setDate}) => {
    const weeklyDate = () => {
        return (new Date().getMonth() === date.getMonth())
            ? new Date()
            : date;
    };

    return (<nav>
        <NavLink className='fancyBtn' activeClassName='activeLink' exact to='/'>Home</NavLink>
        <NavLink onClick={() => setDate(startOfMonth(date))} className='fancyBtn' activeClassName='activeLink' exact to='/Monthly'>Monthly</NavLink>
        <NavLink onClick={() => setDate(weeklyDate(date))} className='fancyBtn' activeClassName='activeLink' exact to='/Weekly'>Weekly</NavLink>
    </nav>);
};
