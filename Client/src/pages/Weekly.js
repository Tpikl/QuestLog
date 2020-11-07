import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Day } from '../components/Day';
import { Modal } from '../shared/Modal';
import { EntryForm } from '../forms/EntryForm';

import './Weekly.scss';

const WeekDays = () => {
    let weekDays = []
    for (let i = 0; i < 7; i++) {
        weekDays.push(moment().startOf('week').add(i, 'days'));
    }

    return weekDays;
}

export const Weekly = () => {
    let week = WeekDays();

    // Pull entries
    const [entries, setEntries] = useState([]);
    useEffect(() => {
        axios.get('api/entry/getbyuserid/DCB35393-671D-4AF5-86F0-3F88A62D7FD0')
        .then(res => {
            setEntries(res.data);
        })
    }, [])

    const getEntries = (day) => {
        let e = [];
        entries.map(item => {
            if (new Date(item.date).getDay() === day) return e.push(item);
        });
        return e;
    };


    let modal = document.getElementById("myModal");

    return (<>
        <center><h1>-Weekly-</h1></center>

        <div className='weekly'>
            {week.map((item, i) => {return (<Day key={i} day={item} click={() => {modal.style.display = "block";}} entries={getEntries(i)} />)})}
        </div>

        <Modal>
            <EntryForm />
        </Modal>
    </>);
}