import React from 'react';

import { Title } from 'components';
import { FormattedMessage } from 'features';


export const EmptyBasket: React.FunctionComponent = () => (
    <>
        <img className='empty__img' src='/assets/images/box.png' alt='box' />
        <Title className='title'>
            <FormattedMessage name='the.basket.is.empty' />
        </Title>
        <p className='subtitle'>
            <FormattedMessage name='add.at.least' />.</p>
    </>
);