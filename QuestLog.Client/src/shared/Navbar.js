import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
    return (<nav>
        <NavLink className='fancyBtn' activeClassName='activeLink' exact to='/'>Home</NavLink>
        <NavLink className='fancyBtn' activeClassName='activeLink' exact to='/Monthly'>Monthly</NavLink>
        <NavLink className='fancyBtn' activeClassName='activeLink' exact to='/Weekly'>Weekly</NavLink>
    </nav>);
};