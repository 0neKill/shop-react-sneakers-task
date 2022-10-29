import { Sneaker } from 'helpers';

export enum FavoriteTypes {
    ADD_PRODUCT = 'add_product_by_favorite',
    REMOVE_PRODUCT = 'remove_product_by_favorite',
}

export interface AddProductToFavoriteActionCreator {
    type: typeof FavoriteTypes.ADD_PRODUCT,
    payload: Sneaker,
}

export interface RemoveProductToFavoriteActionCreator {
    type: typeof FavoriteTypes.REMOVE_PRODUCT,
    payload: string,
}

export type FavoriteActionCreators =
    AddProductToFavoriteActionCreator |
    RemoveProductToFavoriteActionCreator

export interface InitialStateFavorite {
    favorites: {
        [key: string]: Sneaker,
    },
}