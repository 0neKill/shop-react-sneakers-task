import { all } from 'redux-saga/effects';

import { watcherApi } from './api';
import { watcherBasket } from './basket';


export default function* rootSaga() {
    yield all([watcherApi(), watcherBasket()]);
}