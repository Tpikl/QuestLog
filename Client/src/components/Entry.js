import React, { useEffect, useReducer } from 'react';
import { UpdateEntry, DeleteEntry } from '../api/Entry';
import { Reducer } from '../reducers/EntryFormReducer';
import { Actions } from '../actions/EntryFormActions';
import './Entry.scss';

export const Entry = (props) => {
    const [state, dispatch] = useReducer(Reducer, props.entry)
    // Come back to this ---
    // useEffect(() => {
    //     dispatch({type: Actions.SET_ENTRY, value: props.entry});
    // }, [props.entry])

    useEffect(() => updateEntry(), [state]);
    async function updateEntry() {
        UpdateEntry(state)
            .then(() => props.update());
    }
    async function deleteEntry() {
        DeleteEntry(state.id)
            .then(() => props.update());
    }

    return (
        <div className='entry'>
            <div className='entryTitle'>
                <span onClick={() => dispatch({type: Actions.FLIP_COMPLETED})}>
                    <b style={state.completed ? {textDecoration: 'line-through'}:{}}>{state.title}</b>
                </span>
                <div>
                    <i className="fas fa-edit" onClick={() => props.setFormEntry(state)}></i>
                    <i className="far fa-window-close" onClick={() => deleteEntry()}></i>
                </div>
            </div>
            <small style={state.completed ? {textDecoration: 'line-through'}:{}}>{state.description}</small>
        </div>
    )
}