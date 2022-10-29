import { Sneaker } from 'helpers';
import { FavoriteActionCreators, FavoriteTypes, InitialStateFavorite } from '../enums';


const initialState: InitialStateFavorite = {
    favorites: {},
};

const stateToActions = {
    [FavoriteTypes.ADD_PRODUCT]: (state: InitialStateFavorite, payload: Sneaker): InitialStateFavorite => {
        return {
            ...state,
            favorites: {
                ...state.favorites,
                [payload.id]: payload,
            },
        };
    },
    [FavoriteTypes.REMOVE_PRODUCT]: (state: InitialStateFavorite, id: string): InitialStateFavorite => {
        const copyData = { ...state.favorites };
        delete copyData[id];
        return {
            ...state,
            favorites: copyData,
        };
    },
};

export const favoriteReducer = (state: InitialStateFavorite = initialState, action: FavoriteActionCreators): InitialStateFavorite => {
    return stateToActions[action.type] ? stateToActions[action.type](state, action.payload as (string & Sneaker)) : state;
};

