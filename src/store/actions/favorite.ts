import { Sneaker } from 'helpers';
import { AddProductToFavoriteActionCreator, FavoriteTypes, RemoveProductToFavoriteActionCreator } from '../enums';


export const addProductToFavoriteActionCreator = (sneaker: Sneaker): AddProductToFavoriteActionCreator => ({
    type: FavoriteTypes.ADD_PRODUCT,
    payload: sneaker,
});

export const removeProductToFavoriteActionCreator = (id: string): RemoveProductToFavoriteActionCreator => ({
    type: FavoriteTypes.REMOVE_PRODUCT,
    payload: id,
});
