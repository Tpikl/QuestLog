import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Reducer } from '../reducers/entry';
import { Actions } from '../actions/entry';
import { InitialState } from '../state/entry';
import { format, addDays } from 'date-fns';
import { AddEntry, UpdateEntry } from '../api/entry';
import './EntryForm.scss';

export const EntryForm = ({entry, onUpdate}) => {
    const [state, dispatch] = useReducer(Reducer, entry ?? InitialState);
    useEffect(() => {
        if (entry !== undefined || entry !== null) {
            dispatch({type: Actions.SET_ENTRY, value: entry})
        }
    }, [entry, dispatch]);

    async function submitForm(e) {
        e.preventDefault();
        if (state.id !== null)
            UpdateEntry(state)
                .then(() => {
                    onUpdate();
                    dispatch({type: Actions.CLEAR_INPUT});
                });
        else
            AddEntry(state)
                .then(() => {
                    onUpdate();
                    dispatch({type: Actions.CLEAR_INPUT});
            });
    }

    return (
        <form onSubmit={(e) => submitForm(e)}>

            <b className='formDate'>{format(state.date, 'do - eeee')}</b>

            <label htmlFor='title'>Title:</label>
            <input id='title' type='text' value={state.title}
                onChange={e => dispatch({type: Actions.SET_TITLE, value: e.target.value})} />

            <label htmlFor='description'>Description:</label>
            <input id='description' type='text' value={state.description}
                onChange={e => dispatch({type: Actions.SET_DESCIPTION, value: e.target.value})} />

            <label htmlFor='date'>Date:</label>
            <input id='date' type='date' value={format(state.date, 'yyyy-MM-dd')}
                onChange={e => dispatch({type: Actions.SET_DATE, value: addDays(new Date(e.target.value), 1)})} />

            <input className='fancyBtn formBtn' type='submit' value='Submit' />

        </form>
    );
};

EntryForm.propTypes = {
    entry: PropTypes.object,
    onUpdate: PropTypes.func
};