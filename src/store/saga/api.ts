import { takeLatest, call, put } from 'redux-saga/effects';

import { api } from 'helpers';

import { fetchErrorActionCreate, fetchSuccessActionCreate } from '../actions';
import { ApiActionCreators, ApiTypes } from '../enums';


function* loadingData({ payload }: ApiActionCreators): any {

    try {
        const data = yield call(api.query, payload.entryPoint);
        yield put(fetchSuccessActionCreate(payload.entryPoint, data));
    } catch (e) {
        console.log(e);
        yield put(fetchErrorActionCreate(payload.entryPoint, 'ОШИБКА'));
    }
}


export function* watcherApi() {

    yield takeLatest(ApiTypes.QUERY_DATA_START, loadingData);
}