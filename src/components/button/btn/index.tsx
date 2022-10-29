import React from 'react';
import clsx from 'clsx';

import './index.scss';

import arrow from 'helpers/svgs/arrow.svg';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    children?: React.ReactNode,
}

export const Button: React.FunctionComponent<Props> = ({ onClick, className, children }) => {
    return (
        <button className={clsx('btn', className)} onClick={onClick}>
            <img src={arrow} alt='arrow' />
            <span>{children}</span>
        </button>
    );
};