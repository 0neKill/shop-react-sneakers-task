import { Sneaker } from 'helpers';
import { BasketActionsCreators, BasketTypes } from '../enums';

export const addProductByBasket = (product: Sneaker): BasketActionsCreators => ({
    type: BasketTypes.ADD_PRODUCT,
    payload: product,
});

export const removeProductByBasket = (id: string): BasketActionsCreators => ({
    type: BasketTypes.REMOVE_PRODUCT,
    payload: { id },
});

export const allRemoveProductsByBasket = (sneakers: Sneaker[]): BasketActionsCreators => ({
    type: BasketTypes.ALL_REMOVE_PRODUCTS,
    payload: sneakers,
});