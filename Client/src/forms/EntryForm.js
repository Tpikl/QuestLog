import React, { useEffect, useReducer } from 'react';
import { Reducer } from '../reducers/EntryFormReducer';
import { Actions } from '../actions/EntryFormActions';
import { InitialState } from '../state/EntryFormState';
import axios from 'axios';
import './EntryForm.scss';

export const EntryForm = (props) => {
    const [state, dispatch] = useReducer(Reducer, InitialState);
    useEffect(() => {
        dispatch({type: Actions.SET_DATE, value: props.date})
    }, [props.date, dispatch])

    async function submitForm(e) {
        e.preventDefault();
        axios.post('api/entry/add', state)
        .then(() => {
            props.update();
            dispatch({type: Actions.CLEAR_INPUT});
        });
    }

    return (
        <form onSubmit={(e) => submitForm(e)}>
            <label htmlFor="title">Title:</label>
            <input id="title" type='text' value={state.title} onChange={e => dispatch({type: Actions.SET_TITLE, value: e.target.value})} />

            <label htmlFor="description">Description:</label>
            <input id="description" type='text' value={state.description} onChange={e => dispatch({type: Actions.SET_DESCIPTION, value: e.target.value})} />

            {state.date}

            <input type="submit" value="Submit" />
        </form>
    )
}