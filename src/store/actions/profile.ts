import { Sneaker } from 'helpers';
import { AddProductsToActionCreator, ProfileTypes } from '../enums';


export const addProductsToActionCreator = (sneakers: Sneaker[]): AddProductsToActionCreator => ({
    type: ProfileTypes.ADD_PRODUCTS_TO,
    payload: sneakers,
});