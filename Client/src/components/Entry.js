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
            <div className='entryTitle'>
                <span onClick={() => dispatch({type: Actions.FLIP_COMPLETED})}>
                    <b style={state.completed ? {textDecoration: 'line-through'}:{}}>{state.title}</b>
                </span>
                <div>
                    <i className="fas fa-edit" onClick={() => setFormEntry(state)}></i>
                    <i className="far fa-window-close" onClick={() => deleteEntry()}></i>
                </div>
            </div>
            <small style={state.completed ? {textDecoration: 'line-through'}:{}}>{state.description}</small>
        </div>
    )
}