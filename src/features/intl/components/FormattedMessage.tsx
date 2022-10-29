import React from 'react';

import { useLanguage } from '../hooks';
import { MessageName } from '../types';


interface Props {
    name: MessageName;
    value?: { [key: string]: any },
}

export const FormattedMessage: React.FunctionComponent<Props> = React.memo(({ name, value }) => {
    const { getMessage } = useLanguage();
    return (
        <>{getMessage(name,value)}</>
    );
});