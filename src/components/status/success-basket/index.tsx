import React from 'react';

import { Title } from 'components';
import { FormattedMessage } from 'features';


interface Props {
    totalCount: number;
}

export const SuccessBasket: React.FunctionComponent<Props> = ({ totalCount }) => (
    <>
        <img className='success__img' src='/assets/images/success.jpg' alt='success' />
        <Title className='title title--success'>
            <FormattedMessage name='the.order.has.been.placed' />
        </Title>
        <p className='subtitle'>{
            <FormattedMessage name='your.order' value={{ totalCount }} />
        }</p>
    </>
);