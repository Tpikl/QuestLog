import { Actions } from '../actions/EntryFormActions';
import { InitialState } from '../state/EntryFormState';

export const Reducer = (state, action) => {
    switch(action.type){
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
        case Actions.CLEAR_INPUT:
            return {
                ...InitialState,
                date: state.date
            };

        default: return InitialState;
    }
}