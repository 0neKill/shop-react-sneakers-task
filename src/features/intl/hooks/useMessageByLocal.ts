import React from 'react';

import { LanguageConstants, Languages } from '../types';
import { IntlContextType } from '../contexts';


const getMessageByLocal = async (local: LanguageConstants, defaultLang: Languages) => {
    try {
        return await import(`../lang/${local}`);
    } catch (e) {
        return await import(`../lang/${defaultLang}`);
    }
};

export const useMessageInclude = (defaultLang: Languages) => {
    const [data, setData] = React.useState<IntlContextType>({} as IntlContextType);

    React.useEffect(() => {
        const local = getLocalByNavigator(defaultLang);
        getMessageByLocal(local, defaultLang)
            .then((data) => {
                setData({ message: data.default, local: local });
            });
    }, [defaultLang]);

    return React.useMemo(() => {
        return data;
    }, [data]);
};


const getLocalByNavigator = (defaultLang: Languages) => {
    const local = navigator.language as LanguageConstants;
    return LanguageConstants[local] ?? defaultLang;
};


