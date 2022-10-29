import React from 'react';

import './index.scss';
import { selectorForProfileAndFavorite, useActionForCart, useTypedSelectorHook } from 'helpers';
import { Cart, List, PageHeader, Status } from 'components';


export default function ProfileModule() {
    const { data, favorites } = useTypedSelectorHook(selectorForProfileAndFavorite);
    const { handlerOnActions } = useActionForCart();

    return (
        <section className='profile'>
            <PageHeader className='profile__header' message='my.purchases' deleteBtn={false} />
            <List>
                {
                    data.length ?
                        data.map((sneaker, index) => (
                            <Cart key={sneaker.id + index}
                                  itemData={sneaker}
                                  isFavoriteActive={!!favorites[sneaker.id]}
                                  handlerOnClick={handlerOnActions}
                                  inProfile={true}
                                  inBasket={false}
                                  isSelected={false}
                            />
                        )) : <Status status='empty-order' />
                }
            </List>
        </section>
    );
}