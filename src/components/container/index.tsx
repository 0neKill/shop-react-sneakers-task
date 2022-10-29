import React from 'react';
import clsx from 'clsx';

import './index.scss';

interface Props {
    className?: string,
    children?: React.ReactNode,
}

export const Container: React.FunctionComponent<Props> = ({ className, children }) => {
    return (
        <div className={clsx('container', className)}>{children}</div>
    );
};