import React from 'react';
import { Location, useLocation as useLocationRouter } from 'react-router-dom';

import { Routes } from 'routes/enum';

type ILocation = Omit<Location, 'state'> & {
    state: {
        pathname: Routes
    }
}
export const useLocation = (): ILocation => {
    const local = useLocationRouter() as ILocation;
    return React.useMemo(() => {
        return {
            ...local,
            state: local.state ? { pathname: local.state.pathname } : { pathname: Routes.MAIN },
        };
    }, [local]);
};