import React from 'react';

import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav>
            <a className={'fancyBtn'} href='/'>Home</a>
            <a className={'fancyBtn'} href='/weekly'>Weekly</a>
        </nav>
    );
}