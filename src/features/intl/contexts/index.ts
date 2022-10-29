import React from 'react';

import { Languages, MessageKeys } from '../types';


export interface IntlContextType {
    message: MessageKeys,
    local: Languages,
}

export const IntlContext = React.createContext<IntlContextType>({} as IntlContextType);