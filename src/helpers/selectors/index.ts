import { CombineReducers } from 'store/reducers';

export const selectorForProfileAndFavorite = (state: CombineReducers) => {
    return { ...state.profileReducer, ...state.favoriteReducer };
};

export const selectorForBasketAndFavorite = (state: CombineReducers) => {
    return { ...state.basketReducer, ...state.favoriteReducer };
};

export const selectorBeforeEditByBasket = (state: CombineReducers) => {
    const products = Object.values(state.basketReducer.products);
    return {
        ...state.basketReducer,
        products: products,
    };
}