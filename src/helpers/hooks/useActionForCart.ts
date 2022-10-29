import React from 'react';
import { useDispatchActions } from './useDispatchActions';
import { Sneaker } from '../services';

const useActionCreatorsByCart = () => {
    const {
        addProductToFavoriteActionCreator,
        removeProductToFavoriteActionCreator,
        addProductByBasket,
        removeProductByBasket,
    } = useDispatchActions();

    return React.useMemo(() => {
        return {
            basketReducer: [(addProductByBasket as any), removeProductByBasket as any],
            favoriteReducer: [addProductToFavoriteActionCreator, removeProductToFavoriteActionCreator],
        };
    }, [addProductByBasket, removeProductByBasket, addProductToFavoriteActionCreator, removeProductToFavoriteActionCreator]);

};


export const useActionForCart = () => {
    const data = useActionCreatorsByCart();
    const handlerOnActions = React.useCallback((product: Sneaker, isEvent: boolean, to: 'basketReducer' | 'favoriteReducer') => {
        const [handlerOnAdd, handlerOnRemove] = data[to];
        isEvent ?
            handlerOnRemove(product.id) :
            handlerOnAdd(product);
    },[data]);

    return React.useMemo(() => {
        return {
            handlerOnActions,
        };
    }, [handlerOnActions]);

};