import React, { useState } from 'react';
import axios from 'axios';

export const EntryForm = () => {
    const [form, setForm] = useState(
        {
            title: '',
            description: '',
            date: '2020-11-06'
        }
    )

    const submitForm = () => {
        axios.post('api/entry/add', form);
    }

    return (<>
        <form onSubmit={() => submitForm()}>
            <label for="title">Title: </label>
            <input id="title" type='text' value={form.title} onChange={e => setForm({...form, title: e.target.value})} />

            <label for="description">Description: </label>
            <input id="description" type='text' value={form.description} onChange={e => setForm({...form, description: e.target.value})} />

            <input type="submit" value="Submit" />
        </form>
    </>)
}