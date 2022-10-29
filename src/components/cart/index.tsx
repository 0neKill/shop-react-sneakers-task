import React from 'react';
import clsx from 'clsx';

import './index.scss';

import { Sneaker } from 'helpers';
import { ButtonForCart } from 'components';
import { FormattedMessage } from 'features';
import { FavoriteSvg } from 'helpers';

interface Props {
    inBasket: boolean,
    isSelected: boolean,
    isFavoriteActive: boolean,
    inProfile: boolean,
    itemData: Sneaker,
    handlerOnClick: (product: Sneaker, isEvent: boolean, to: 'basketReducer' | 'favoriteReducer') => void,
}

export const Cart: React.FunctionComponent<Props> = React.memo(({
                                                                    inBasket,
                                                                    isSelected,
                                                                    inProfile,
                                                                    isFavoriteActive,
                                                                    itemData,
                                                                    handlerOnClick,
                                                                }) => {
    const { price, title, images } = itemData;

    return (
        <article className={clsx('cart', { 'cart--basket': inBasket })}>
            {!inBasket && (
                <div onClick={handlerOnClick.bind(this, itemData, isFavoriteActive, 'favoriteReducer')}
                     className={clsx('cart__favorite', { 'active': isFavoriteActive })}>
                    <FavoriteSvg className='favorite' />
                </div>
            )}
            <img className='cart__img' src={images} alt='123' />
            <div className='cart__content'>
                <p className='cart__title'>{title}</p>
                <div className='cart__footer'>
                    <div className='cart__price'>
                        <span className='price__title'><FormattedMessage name='price' />:</span>
                        <span className='price__subtitle'>
                            <FormattedMessage name='value' value={{ sum: price }} />
                        </span>
                    </div>
                    {!inProfile &&
                        <ButtonForCart className='cart__btn' remove={inBasket} active={isSelected}
                                       handlerOnClick={handlerOnClick.bind(this, itemData, (isSelected ? isSelected : inBasket ? inBasket : isSelected), 'basketReducer')} />}
                </div>
            </div>
        </article>
    );
});