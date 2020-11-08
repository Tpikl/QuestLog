import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { UpdateEntry, DeleteEntry } from '../api/Entry';
import { Reducer } from '../reducers/EntryFormReducer';
import { Actions } from '../actions/EntryFormActions';
import './Entry.scss';

export const Entry = ({entry, onSelect, onUpdate}) => {
    const [state, dispatch] = useReducer(Reducer, entry)
    useEffect(() => {
        dispatch({type: Actions.SET_ENTRY, value: entry});
    }, [entry])

    // TODO:
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => updateEntry(), [state.completed]);
    async function updateEntry() {
        UpdateEntry(state)
            .then(() => onUpdate());
    }
    async function deleteEntry() {
        DeleteEntry(state.id)
            .then(() => onUpdate());
    }

    const completed = () => {
        return state.completed ? 'completed' : ''
    }

    return (
        <div className='entry'>
            <div className='entryBlock'>
                <div className='header'>
                    <span className='pointer' onClick={() => dispatch({type: Actions.FLIP_COMPLETED})}>
                        <div className={completed()}>{state.title}</div>
                    </span>
                    <div className='controls hidden'>
                        <i className='pointer far fa-edit' onClick={() => onSelect(state)}></i>&nbsp;&nbsp;
                        <i className='deleteBtn pointer far fa-window-close' onClick={() => deleteEntry()}></i>
                    </div>
                </div>
                <small className={`description hidden ${completed()}`}>{state.description}</small>
            </div>
        </div>
    )
}

Entry.propType = {
    entry: PropTypes.object,
    onSelect: PropTypes.func,
    onDelete: PropTypes.func
}