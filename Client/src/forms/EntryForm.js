import React, { useEffect, useReducer } from 'react';
import { Reducer } from '../reducers/EntryFormReducer';
import { Actions } from '../actions/EntryFormActions';
import { InitialState } from '../state/EntryFormState';
import { format } from 'date-fns';
import { AddEntry, UpdateEntry } from '../api/Entry';
import './EntryForm.scss';

export const EntryForm = ({entry, update}) => {
    const [state, dispatch] = useReducer(Reducer, entry ?? InitialState);
    useEffect(() => {
        if (entry !== undefined || entry !== null) {
            dispatch({type: Actions.SET_ENTRY, value: entry})
        }
    }, [entry, dispatch])

    async function submitForm(e) {
        e.preventDefault();
        if (state.id !== null)
            UpdateEntry(state)
                .then(() => {
                    update();
                    dispatch({type: Actions.CLEAR_INPUT});
                });
        else
            AddEntry(state)
                .then(() => {
                    update();
                    dispatch({type: Actions.CLEAR_INPUT});
            });
    }

    return (
        <form onSubmit={(e) => submitForm(e)}>
            <label htmlFor="title">Title:</label>
            <input id="title" type='text' value={state.title} onChange={e => dispatch({type: Actions.SET_TITLE, value: e.target.value})} />

            <label htmlFor="description">Description:</label>
            <input id="description" type='text' value={state.description} onChange={e => dispatch({type: Actions.SET_DESCIPTION, value: e.target.value})} />

            {format(state.date, "yyyy-MM-dd")}


            <input type="submit" value="Submit" />
        </form>
    )
}