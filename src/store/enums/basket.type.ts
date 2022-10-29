import { Sneaker } from 'helpers';

export enum BasketTypes {
    ADD_PRODUCT = 'add_product',
    REMOVE_PRODUCT = 'remove_product',
    ALL_REMOVE_PRODUCTS = 'all_remove_products',
}

export interface AddProductActionCreator {
    type: typeof BasketTypes.ADD_PRODUCT,
    payload: Sneaker,
}

export interface RemoveProductActionCreator {
    type: typeof BasketTypes.REMOVE_PRODUCT,
    payload: { id: string },
}

export interface AllRemoveProductsActionCreator {
    type: typeof BasketTypes.ALL_REMOVE_PRODUCTS,
    payload: Sneaker[]
}

export type BasketActionsCreators =
    AddProductActionCreator
    | RemoveProductActionCreator
    | AllRemoveProductsActionCreator;

export interface InitialStateBasket {
    products: {
        [key: string]: Sneaker,
    }
    total_count: number,
    total_price: number,
}