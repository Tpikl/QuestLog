import React, { useEffect, useReducer } from 'react';
import { UpdateEntry, DeleteEntry } from '../api/Entry';
import { Reducer } from '../reducers/EntryFormReducer';
import { Actions } from '../actions/EntryFormActions';
import './Entry.scss';

export const Entry = ({entry, update, setFormEntry}) => {
    const [state, dispatch] = useReducer(Reducer, entry)
    useEffect(() => {
        dispatch({type: Actions.SET_ENTRY, value: entry});
    }, [entry])

    // TODO:
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => updateEntry(), [state.completed]);
    async function updateEntry() {
        UpdateEntry(state)
            .then(() => update());
    }
    async function deleteEntry() {
        DeleteEntry(state.id)
            .then(() => update());
    }

    return (
        <div className='entry'>
            <div className='entryBlock'>
                <div className='header'>
                    <span className='pointer' onClick={() => dispatch({type: Actions.FLIP_COMPLETED})}>
                        <div style={state.completed ? {textDecoration: 'line-through'}:{}}>{state.title}</div>
                    </span>
                    <div className='controls hidden'>
                        <i className="pointer far fa-edit" onClick={() => setFormEntry(state)}></i>&nbsp;&nbsp;
                        <i className="deleteBtn pointer far fa-window-close" onClick={() => deleteEntry()}></i>
                    </div>
                </div>
                <small className='description hidden' style={state.completed ? {textDecoration: 'line-through'}:{}}>{state.description}</small>
            </div>
        </div>
    )
}