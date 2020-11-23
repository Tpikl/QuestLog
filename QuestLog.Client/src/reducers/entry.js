import { Actions } from '../actions/entry';
import { InitialState } from '../state/entry';

export const Reducer = (state, action) => {
    switch(action.type){
        case Actions.SET_ENTRY:
            return {
                ...action.value
            }
        case Actions.SET_TITLE:
            return {
                ...state,
                title: action.value
            };
        case Actions.SET_DESCIPTION:
            return {
                ...state,
                description: action.value
            };
        case Actions.SET_DATE:
            return {
                ...state,
                date: action.value
            };
        case Actions.SET_END_DATE:
            return {
                ...state,
                endDate: action.value
            }
        case Actions.TOGGLE_COMPLETED:
            return {
                ...state,
                completed: !state.completed
            }
        case Actions.CLEAR_INPUT:
            return {
                ...InitialState,
                date: state.date
            };

        default: return state;
    };
};