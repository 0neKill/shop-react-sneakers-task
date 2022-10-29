import React from 'react';

import { IntlContext } from '../contexts';
import { MessageName } from '../types';

export const useLanguage = () => {

    const { message, local } = React.useContext(IntlContext);

    const getMessage = React.useCallback((name: MessageName, value?: { [key: string]: any }) => {
        let resultMessage = message[name];
        if (typeof value === 'object') {
            const keys = Object.keys(value);
            for (let key of keys) {
                resultMessage = resultMessage.replace(`{${key}}`, value[key]);
            }
        }
        return resultMessage;
    }, [message]);

    return React.useMemo(() => {
        return { getMessage, local };
    }, [getMessage, local]);
};