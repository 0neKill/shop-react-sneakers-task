import { Sneaker } from 'helpers';
import { BasketActionsCreators, BasketTypes, InitialStateBasket } from '../enums';


const initialState: InitialStateBasket = {
    products: {},
    total_count: 0,
    total_price: 0,
};

const stateToActions = {
    [BasketTypes.ADD_PRODUCT]: (state: InitialStateBasket, payload: Sneaker) => {
        const result: InitialStateBasket = {
            ...state,
            products: {
                ...state.products,
                [payload.id]: state.products[payload.id] ? { ...state.products[payload.id], ...payload } : payload,
            },
            total_count: state.total_count + 1,
            total_price: state.total_price + Number(payload.price.split(' ').join('')),
        };
        return result;
    },
    [BasketTypes.REMOVE_PRODUCT]: (state: InitialStateBasket, payload: { id: string }) => {
        const result: InitialStateBasket = { ...state, products: { ...state.products } };
        result.total_count = result.total_count - 1;
        result.total_price = result.total_price - +result.products[payload.id].price.split(' ').join('');
        delete result.products[payload.id];
        return result;
    },
    [BasketTypes.ALL_REMOVE_PRODUCTS]: (state: InitialStateBasket) => {
        const result: InitialStateBasket = { ...state, products: { ...state.products } };
        result.products = {};
        result.total_count = 0;
        result.total_price = 0;
        return result;
    },
};

export const basketReducer = (state = initialState, action: BasketActionsCreators): InitialStateBasket => {
    return stateToActions[action.type] ? stateToActions[action.type](state, action.payload as any) : state;
};