import { put, takeLatest } from 'redux-saga/effects';

import { addProductsToActionCreator } from '../actions';
import { AllRemoveProductsActionCreator, BasketTypes } from '../enums';


function* workerData({ payload }: AllRemoveProductsActionCreator) {
    yield put(addProductsToActionCreator(payload));
}

export function* watcherBasket() {
    yield takeLatest(BasketTypes.ALL_REMOVE_PRODUCTS, workerData);

}