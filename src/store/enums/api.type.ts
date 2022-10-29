import { EntryPoints, Sneaker } from '../../helpers';

interface Data {
    loading: boolean,
    data: Sneaker[] | null,
    error: any,
}

export type PayloadData = {
    entryPoint: EntryPoints,
    data?: Sneaker[] | string,
    params?: any,
};
export type InitialState = Record<EntryPoints, Data>

export enum ApiTypes {
    QUERY_DATA_START = 'query_data_start',
    QUERY_DATA_SUCCESS = 'query_data_success',
    QUERY_DATA_ERROR = 'query_data_error',
}

export interface QueryStartActionCreator {
    type: typeof ApiTypes.QUERY_DATA_START,
    payload: PayloadData,
}

export interface QueryErrorActionCreator {
    type: typeof ApiTypes.QUERY_DATA_ERROR,
    payload: PayloadData,
}

export interface QuerySuccessActionCreator {
    type: typeof ApiTypes.QUERY_DATA_SUCCESS,
    payload: PayloadData,
}
export type State2Action = (state: InitialState, entryPoint: EntryPoints, payload: PayloadData) => Record<ApiTypes, InitialState>

export type ApiActionCreators = QueryStartActionCreator | QueryErrorActionCreator | QuerySuccessActionCreator;