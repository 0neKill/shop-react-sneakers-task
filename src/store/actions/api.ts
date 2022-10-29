import { EntryPoints, Sneaker } from 'helpers';
import { ApiActionCreators, ApiTypes } from '../enums';

export const fetchStartActionCreate = (entryPoint: EntryPoints, params?: any): ApiActionCreators => ({
    type: ApiTypes.QUERY_DATA_START,
    payload: { entryPoint, params },
});

export const fetchSuccessActionCreate = (entryPoint: EntryPoints, data: Sneaker[]): ApiActionCreators => ({
    type: ApiTypes.QUERY_DATA_SUCCESS,
    payload: { entryPoint, data },
});

export const fetchErrorActionCreate = (entryPoint: EntryPoints, data: string): ApiActionCreators => ({
    type: ApiTypes.QUERY_DATA_ERROR,
    payload: { entryPoint, data },
});