import React from 'react';

import { Title } from 'components';
import { FormattedMessage } from 'features';



export const EmptyFavorite: React.FunctionComponent = () => (
    <>
        <img className='empty-basket__img' src='/assets/images/empty-favorite.png' alt='box' />
        <Title className='title'><FormattedMessage name='there.are.no.bookmarks' /> :(</Title>
        <p className='subtitle'><FormattedMessage name='you.did.not.bookmark.anything' /></p>
    </>
);