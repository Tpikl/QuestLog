import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { UpdateEntry, DeleteEntry } from '../api/entry';
import { Reducer } from '../reducers/entry';
import { Actions } from '../actions/entry';
import { StyledEntry } from './Entry.styled';

export const Entry = ({entry, onSelect, onUpdate}) => {
    const [state, dispatch] = useReducer(Reducer, entry);
    useEffect(() => {
        dispatch({type: Actions.SET_ENTRY, value: entry});
    }, [entry]);

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

    return (
        <StyledEntry completed={state.completed}>
            <div className='entryBlock'>
                <div className='header'>
                    <span className='pointer' onClick={() => dispatch({type: Actions.TOGGLE_COMPLETED})}>
                        <div className={'entryText'}>{state.title}</div>
                    </span>
                    <div className='controls hidden'>
                        <i className='pointer far fa-edit' onClick={() => onSelect(state)}></i>&nbsp;&nbsp;
                        <i className='deleteBtn pointer far fa-window-close' onClick={() => deleteEntry()}></i>
                    </div>
                </div>
                <small className={`description hidden entryText`}>{state.description}</small>
            </div>
        </StyledEntry>
    );
};

Entry.propType = {
    entry: PropTypes.object,
    onSelect: PropTypes.func,
    onDelete: PropTypes.func
};