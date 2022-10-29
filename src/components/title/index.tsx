import React from 'react';
import clsx from 'clsx';

import './index.scss';

interface Props {
    className?: string,
    children?: React.ReactNode,
}

export const Title: React.FunctionComponent<Props> = React.memo(({ className, children }) => {
    return (
        <h2 className={clsx('title', className)}>{children ?? ''}</h2>
    );
})