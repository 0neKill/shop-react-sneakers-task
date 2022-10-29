import React from 'react';
import clsx from 'clsx';

import './index.scss';

interface Props {
    className?: string,
    children?: React.ReactNode,
}


export const List: React.FunctionComponent<Props> = React.memo(({ className, children }) => {
    return (
        <div className={clsx('list', className)}>
            {children}
        </div>
    );
});