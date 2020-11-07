import React, { useEffect, useReducer } from 'react';
import { Reducer } from '../reducers/EntryFormReducer';
import { Actions } from '../actions/EntryFormActions';
import { InitialState } from '../state/EntryFormState';
import { format } from 'date-fns';
import axios from 'axios';
import './EntryForm.scss';

export const EntryForm = (props) => {
    const [state, dispatch] = useReducer(Reducer, props.entry ?? InitialState);
    useEffect(() => {
        if (props.entry !== undefined || props.entry !== null) {
            dispatch({type: Actions.SET_ENTRY, value: props.entry})
        }
    }, [props.entry, dispatch])

    async function submitForm(e) {
        e.preventDefault();
        if (state.id !== null)
            axios.put('api/entry/update', state)
                .then(() => {
                    props.update();
                    dispatch({type: Actions.CLEAR_INPUT});
                });
        else
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

            {format(state.date, "yyyy-MM-dd")}


            <input type="submit" value="Submit" />
        </form>
    )
}