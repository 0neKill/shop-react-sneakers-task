import React from 'react';


import './index.scss';

import { selectorForBasketAndFavorite, useActionForCart, useTypedSelectorHook } from 'helpers';
import { Cart, List, PageHeader, Status } from 'components';

export default function FavoriteModule() {
    const { favorites, products } = useTypedSelectorHook(selectorForBasketAndFavorite);
    const { handlerOnActions } = useActionForCart();

    const valueData = Object.values(favorites);

    return (
        <section className='favorite'>
            <PageHeader className='favorite__header' message={'my.favorites'} deleteBtn={false} />
            <List>
                {
                    valueData.length ? valueData.map(sneaker => (
                            <Cart key={sneaker.id}
                                  itemData={sneaker}
                                  isFavoriteActive={!!favorites[sneaker.id]}
                                  handlerOnClick={handlerOnActions}
                                  isSelected={!!products[sneaker.id]}
                                  inProfile={false}
                                  inBasket={false}
                            />
                        ))
                        :
                        <Status status='empty-favorite' />
                }
            </List>

        </section>
    );
}
