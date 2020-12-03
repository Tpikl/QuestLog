import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Reducer } from '../reducers/entry';
import { Actions } from '../actions/entry';
import { DisplayAreas, InitialState } from '../state/entry';
import { addDays } from 'date-fns';
import { AddEntry, UpdateEntry } from '../api/entry';
import { baseFormat, weeklyFormat } from '../util';
import './EntryForm.scss';

export const EntryForm = ({entry, onUpdate}) => {
    const [state, dispatch] = useReducer(Reducer, entry ?? InitialState);
    useEffect(() => {
        if (entry !== undefined || entry !== null) {
            dispatch({type: Actions.SET_ENTRY, value: entry})
        }
    }, [entry, dispatch]);

    function submitForm(e) {
        e.preventDefault();
        (state.id !== null)
            ? UpdateEntry(state).then(() => onUpdate(state.date))
            : AddEntry(state).then(() => onUpdate(state.date))
    }

    return (
        <form onSubmit={e => submitForm(e)}>

            {entry.displayArea === DisplayAreas.Day.id && <>
                <b className='formDate'>{weeklyFormat(state.date)}</b>
            </>}

            <label htmlFor='title'>Title:</label>
            <input id='title' type='text' value={state.title}
                onChange={e => dispatch({type: Actions.SET_TITLE, value: e.target.value})} />

            <label htmlFor='description'>Description:</label>
            <input id='description' type='text' value={state.description}
                onChange={e => dispatch({type: Actions.SET_DESCIPTION, value: e.target.value})} />

            {entry.displayArea === DisplayAreas.Day.id && <>
                <label htmlFor='date'>Date:</label>
                <input id='date' type='date' value={baseFormat(state.date)}
                    onChange={e => dispatch({type: Actions.SET_DATE, value: addDays(new Date(e.target.value), 1)})} />

            </>}

            <input className='fancyBtn formBtn' type='submit' value='Submit' />

        </form>
    );
};

EntryForm.propTypes = {
    entry: PropTypes.object,
    onUpdate: PropTypes.func
};