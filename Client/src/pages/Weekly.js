import React, { useState } from 'react';
import axios from 'axios';
import { Day } from '../components/Day';

import './Weekly.scss';

export const Weekly = () => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const [entries, setEntries] = useState([]);

    //Pull entries
    axios.get('api/entry/getbyuserid/DCB35393-671D-4AF5-86F0-3F88A62D7FD0')
    .then(res => {
        setEntries(res.data);
    })

    const getEntries = (day) => {
        let e = [];
        entries.map(item => {
            if (new Date(item.date).getDay() == day) e.push(item);
        });
        return e;
    };

    return (<>
        <center><h1>-Weekly-</h1></center>

        <div className='weekly'>
            {weekDays.map((item, i) => {return (<Day key={i} day={item} entries={getEntries(i)} />)})}
        </div>
    </>);
}