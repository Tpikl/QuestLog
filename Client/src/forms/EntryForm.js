import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EntryForm.scss';

export const EntryForm = (props) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        date: props.date
    })
    useEffect(() => {
        setForm({...form, date: props.date})
    }, [props.date])

    async function submitForm(e) {
        e.preventDefault();
        axios.post('api/entry/add', form);
        props.update();
    }

    return (
        <form onSubmit={(e) => submitForm(e)}>
            <label htmlFor="title">Title:</label>
            <input id="title" type='text' value={form.title} onChange={e => setForm({...form, title: e.target.value})} />

            <label htmlFor="description">Description:</label>
            <input id="description" type='text' value={form.description} onChange={e => setForm({...form, description: e.target.value})} />

            {form.date}

            <input type="submit" value="Submit" />
        </form>
    )
}