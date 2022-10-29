import React from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { Routes } from 'routes/enum';
import { ButtonForCart } from 'components';
import { Title } from 'components';
import { FormattedMessage, MessageName } from 'features';


interface Props {
    message: MessageName,
    deleteBtn: boolean,
    className?: string,
    children?: React.ReactNode,
}

export const PageHeader: React.FunctionComponent<Props> = React.memo(({ message, deleteBtn, className, children }) => {
    const navigate = useNavigate();
    const back = React.useCallback(() => navigate(Routes.MAIN), [navigate]);
    return (
        <div className={clsx(className)}>
            {!deleteBtn && <ButtonForCart className='favorite__btn' exit handlerOnClick={back} />}
            <Title>
                <FormattedMessage name={message} />
            </Title>
            {children}
        </div>
    );
}, (prevProps, nextProps) => prevProps.message === nextProps.message);