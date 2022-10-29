import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.scss';

import { Button, Cart, Container, Status, StatusForPage, Title } from 'components';
import {
    selectorBeforeEditByBasket,
    useActionForCart,
    useDispatchActions,
    useLocation,
    useTypedSelectorHook,
} from 'helpers';
import { FormattedMessage, useLanguage } from '../../../../features';

export default function BasketModule() {
    const { products, total_price } = useTypedSelectorHook(selectorBeforeEditByBasket);
    const { allRemoveProductsByBasket } = useDispatchActions();
    const { handlerOnActions } = useActionForCart();
    const [status, setStatus] = React.useState<StatusForPage>('empty-basket');
    const navigate = useNavigate();
    const local = useLocation();
    const { getMessage } = useLanguage();

    const totalPercent = Math.round((total_price * 5) / 100);
    const totalPrice = total_price - totalPercent;

    React.useEffect(() => {
        document.body.classList.add('not-scroll');
        return () => document.body.classList.remove('not-scroll');
    }, []);

    const handlerOnSubmit = () => {
        const success = window.confirm(`${getMessage('place.an.order')}?`);
        if (success) {
            setStatus('success-basket');
            allRemoveProductsByBasket(products);
        }
    };

    return (
        <section className='basket' onClick={() => navigate(local.state.pathname)}>
            <div className='basket__content' onClick={(e) => e.stopPropagation()}>
                <Container className='basket__container'>
                    <Title className='basket__title'>
                        <FormattedMessage name='basket' />
                    </Title>
                    {
                        products.length ? (
                            <>
                                <div className='basket__list'>
                                    {
                                        products.map(sneaker => (
                                            <Cart key={sneaker.id}
                                                  inBasket={true}
                                                  inProfile={false}
                                                  isFavoriteActive={false}
                                                  isSelected={false}
                                                  itemData={sneaker}
                                                  handlerOnClick={handlerOnActions} />
                                        ))
                                    }
                                </div>
                                <div className='basket__footer'>
                                    <div className='basket__price'>
                                        <span className='price__title'>
                                            <FormattedMessage name='total' />:</span>
                                        <span className='line' />
                                        <span className='price'>
                                            <FormattedMessage name='value' value={{ sum: totalPrice }} />.
                                        </span>
                                    </div>
                                    <div className='basket__price'>
                                        <span className='price__title'>
                                            <FormattedMessage name='tax' value={{ percent: '5%:' }} />
                                        </span>
                                        <span className='line' />
                                        <span className='price'>
                                            <FormattedMessage name='value' value={{ sum: totalPercent }} />.
                                        </span>
                                    </div>
                                    <Button className='basket__btn' onClick={handlerOnSubmit}>
                                        <FormattedMessage name='place.an.order' />
                                    </Button>
                                </div>
                            </>
                        ) : <Status status={status} />
                    }
                </Container>
            </div>
        </section>
    );
};