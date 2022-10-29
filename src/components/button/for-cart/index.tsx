import React from 'react';
import clsx from 'clsx';

import './index.scss';

interface Props {
    className?: string,
    remove?: boolean,
    active?: boolean,
    exit?: boolean,
    handlerOnClick?: () => void,
}

export const ButtonForCart: React.FunctionComponent<Props> = React.memo(({ handlerOnClick, className, remove, exit, active }) => {
    return (
        <button
            onClick={handlerOnClick}
            className={clsx('btn-for-cart', className, { 'remove': remove }, { 'active': active }, { 'exit': exit })}>
            <span />
        </button>
    );
});