import { EntryPoints, Sneaker } from 'helpers';
import { ApiActionCreators, ApiTypes, InitialState, State2Action } from '../../enums';


const initialState = (Object.values(EntryPoints) as EntryPoints[]).reduce((acc, next) => {
    acc[next] = {
        loading: false,
        data: null,
        error: null,
    };
    return acc;
}, {} as InitialState);


// export type CatalogReducer = (state: InitialState, action: ApiActionCreators) => InitialState;

const stateToAction: State2Action = (state, entryPoint, payload) => ({
    [ApiTypes.QUERY_DATA_START]: {
        ...state,
        [entryPoint]: {
            ...state[entryPoint],
            loading: true,
            error: null,
        },
    },
    [ApiTypes.QUERY_DATA_SUCCESS]: {
        ...state,
        [entryPoint]: {
            ...state[entryPoint],
            data: payload.data as Sneaker[],
            loading: false,
        },
    },
    [ApiTypes.QUERY_DATA_ERROR]: {
        ...state,
        [entryPoint]: {
            ...state[entryPoint],
            loading: false,
            error: payload.data,
        },
    },
});

export const apiReducer = (state = initialState, action: ApiActionCreators): InitialState => {
    if (!action.payload) {
        return state;
    }
    return stateToAction(state, action.payload.entryPoint, action.payload)[action.type] ?? state;
};