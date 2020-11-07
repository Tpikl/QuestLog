import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { startOfWeek, addDays, format } from 'date-fns';
import { Day } from '../components/Day';
import { Modal } from '../shared/Modal';
import { EntryForm } from '../forms/EntryForm';

import './Weekly.scss';

const WeekDays = () => {
    let weekDays = []
    let startDay = startOfWeek(new Date());

    for (let i = 0; i < 7; i++) {
        weekDays.push(addDays(startDay, i));
    }
    return weekDays;
}

export const Weekly = () => {
    let week = WeekDays();

    // Pull entries
    const [entries, setEntries] = useState([]);
    async function pullEntries() {
        axios.get('api/entry/getbyuserid/DCB35393-671D-4AF5-86F0-3F88A62D7FD0')
        .then(res => {
            setEntries(res.data);
        })
    }
    useEffect(() => {pullEntries()}, [])

    const getEntries = (day) => {
        let e = [];
        entries.forEach(item => {
            if (new Date(item.date).getDay() === day) e.push(item);
        });
        return e;
    };

    const [formDate, setFormDate] = useState(null);

    let modal = document.getElementById("myModal");
    return (<>
        <center><h1>-Weekly-</h1></center>

        <div className='weekly'>
            {week.map((item, i) => {
                return (<Day key={i} day={item} click={() => {setFormDate(format(item, "yyyy-MM-dd")); modal.style.display = "block";}} entries={getEntries(i)} update={() => pullEntries()} />)
            })}
        </div>

        <Modal>
            <EntryForm date={formDate} update={() => {pullEntries(); modal.style.display = "none";}} />
        </Modal>
    </>);
}