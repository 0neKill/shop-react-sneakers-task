import React from 'react';
import { shallowEqual } from 'react-redux';

import { useDispatchActions } from './useDispatchActions';
import { useTypedSelectorHook } from './useTypedSelectorHook';
import { EntryPoints } from '../services';

export const useQuery = (entryPoint: EntryPoints) => {
    const { fetchStartActionCreate } = useDispatchActions();
    const data = useTypedSelectorHook(state => state.apiReducer[entryPoint], shallowEqual);

    const performance = React.useCallback(() => fetchStartActionCreate(entryPoint), [entryPoint, fetchStartActionCreate]);
    return React.useMemo(() => {
        return {
            data,
            performance,
        };
    }, [data, performance]);

};