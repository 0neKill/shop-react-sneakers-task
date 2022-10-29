import React from 'react';
import clsx from 'clsx';

interface Props {
    children: React.ReactNode,
    isBasket: boolean,
}

export const Article: React.FunctionComponent<Props> = ({ children, isBasket }) => {
    return (
        <article className={clsx('cart', { 'cart--basket': isBasket })}>
            {children}
        </article>
    );
};