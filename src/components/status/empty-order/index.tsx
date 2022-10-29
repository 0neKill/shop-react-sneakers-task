import React from 'react';

import { Title } from 'components';
import { FormattedMessage } from 'features';


export const EmptyOrder: React.FunctionComponent = () => (
    <>
        <img className='empty-basket__img' src='/assets/images/empty.png' alt='box' />
        <Title className='title'>
            <FormattedMessage name='you.do.not.have' />
        </Title>
        <p className='subtitle'><FormattedMessage name='are.you.a.beggar' /> <br /> <FormattedMessage
            name='place.at.least.one' />.</p>
    </>
);
