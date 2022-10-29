import { Sneaker } from 'helpers';
import { InitialStateProfile, ProfileActionsCreators, ProfileTypes } from '../enums';

const initialState: InitialStateProfile = {
    data: [],
    total_count_order: 0,
};

const stateToActions = {
    [ProfileTypes.ADD_PRODUCTS_TO]: (state: InitialStateProfile, payload: Sneaker[]): InitialStateProfile => {
        return {
            ...state,
            total_count_order: state.total_count_order + 1,
            data: [...state.data, ...payload],
        };
    },
};

export const profileReducer = (state: InitialStateProfile = initialState, action: ProfileActionsCreators): InitialStateProfile => {
    return stateToActions[action.type] ? stateToActions[action.type](state, action.payload) : state;
};