import { format } from 'date-fns';
import React from 'react';

import './Navbar.scss';

export const Navbar = ({date}) => {
    return (<div>
        <small>{format(date, 'yyyy-MM-dd HH:mm:ss.SSS')}</small>
        <nav>
            <a className='fancyBtn' href='/'>Home</a>
            <a className='fancyBtn' href='/Monthly'>Monthly</a>
            <a className='fancyBtn' href='/Weekly'>Weekly</a>
        </nav>
    </div>
    );
};