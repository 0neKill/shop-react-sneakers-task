import { Sneaker } from '../../helpers';

export enum ProfileTypes {
    ADD_PRODUCTS_TO = 'add_products_to',
}


export interface AddProductsToActionCreator {
    type: typeof ProfileTypes.ADD_PRODUCTS_TO,
    payload: Sneaker[],
}

export type ProfileActionsCreators = AddProductsToActionCreator;

export interface InitialStateProfile {
    data: Sneaker[],
    total_count_order: number,
}
