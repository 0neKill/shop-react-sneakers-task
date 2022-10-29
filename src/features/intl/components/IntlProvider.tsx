import React from 'react';

import { IntlContext } from '../contexts';
import { Languages } from '../types';
import { useMessageInclude } from '../hooks';

interface Props {
    children: React.ReactNode,
    defaultLang: Languages,
}

export const IntlProvider: React.FunctionComponent<Props> = React.memo(({ children, defaultLang }) => {
    const { message, local } = useMessageInclude(defaultLang);
    return (
        <IntlContext.Provider value={{ message: message, local: local }}>
            {children}
        </IntlContext.Provider>
    );
});