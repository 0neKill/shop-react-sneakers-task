import React from 'react';

import './index.scss';

import {
    EntryPoints, selectorForBasketAndFavorite,
    useActionForCart, useQuery, useTypedSelectorHook,
} from 'helpers';

import { Cart, ContentLoader, List, PageHeader } from 'components';
import { FormattedMessage } from 'features';


export default function CatalogModule() {
    const { performance, data } = useQuery(EntryPoints.SNEAKERS);
    const { products, favorites } = useTypedSelectorHook(selectorForBasketAndFavorite);
    const { handlerOnActions } = useActionForCart();

    React.useEffect(() => {
        performance();
    }, [performance]);

    return (
        <section className='catalog'>
            <PageHeader className='catalog__header' deleteBtn message='all.sneakers'>
                <input className='catalog__search' />
            </PageHeader>
            <List>
                {
                    !data.loading ?
                        (data.data?.length ?
                            data.data.map(product => <Cart key={product.id}
                                                           itemData={product}
                                                           inBasket={false}
                                                           inProfile={false}
                                                           isSelected={!!products[product.id]}
                                                           isFavoriteActive={!!favorites[product.id]}
                                                           handlerOnClick={handlerOnActions}

                            />) :
                            <div><FormattedMessage name={'empty'} /></div>) :
                        Array(8).fill(undefined).map((_, index) => (
                            <ContentLoader key={index} />
                        ))
                }
            </List>
        </section>
    );
};