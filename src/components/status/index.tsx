import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation, useTypedSelectorHook } from 'helpers';
import { FormattedMessage } from 'features';

import './index.scss';

import { EmptyBasket } from './empty-basket';
import { EmptyOrder } from './empty-order';
import { SuccessBasket } from './success-basket';
import { EmptyFavorite } from './empty-favorite';
import { Button } from '../button';

export type StatusForPage = 'empty-basket' | 'success-basket' | 'empty-order' | 'empty-favorite';

interface Props {
    status: 'empty-basket' | 'success-basket' | 'empty-order' | 'empty-favorite';
}


export const Status: React.FunctionComponent<Props> = ({ status }) => {
    const local = useLocation();
    const totalCountOrder = useTypedSelectorHook(state => state.profileReducer.total_count_order);
    const navigate = useNavigate();

    return (
        <div className='status-component'>
            {{
                'empty-basket': <EmptyBasket />,
                'empty-order': <EmptyOrder />,
                'empty-favorite': <EmptyFavorite />,
                'success-basket': <SuccessBasket totalCount={totalCountOrder} />,

            }[status]}
            <Button onClick={() => navigate(local.state.pathname)}>
                <FormattedMessage name='go.back' />
            </Button>
        </div>
    );
};