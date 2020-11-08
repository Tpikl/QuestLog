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
        <div className={'entryBlock'}>
            <div className='entry'>
                <div className='header'>
                    <span className={'title'} onClick={() => dispatch({type: Actions.FLIP_COMPLETED})}>
                        <div style={state.completed ? {textDecoration: 'line-through'}:{}}>{state.title}</div>
                    </span>
                    <div className={'controls'}>
                        <i className="far fa-edit fa-lg" onClick={() => setFormEntry(state)}></i>&nbsp;&nbsp;
                        <i className="far fa-window-close fa-lg" onClick={() => deleteEntry()}></i>
                    </div>
                </div>
                <small className={'description controls'} style={state.completed ? {textDecoration: 'line-through'}:{}}>{state.description}</small>
            </div>
        </div>
    )
}