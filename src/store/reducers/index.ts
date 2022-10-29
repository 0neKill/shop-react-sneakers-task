import { combineReducers } from 'redux';

import { InitialState, InitialStateBasket, InitialStateFavorite, InitialStateProfile } from '../enums';
import { basketReducer, profileReducer, favoriteReducer, apiReducer } from './imports';


export type CombineReducers = {
    apiReducer: InitialState,
    basketReducer: InitialStateBasket,
    profileReducer: InitialStateProfile,
    favoriteReducer: InitialStateFavorite,
}

export const reducers = combineReducers<CombineReducers>({
    apiReducer,
    basketReducer,
    profileReducer,
    favoriteReducer,
});
