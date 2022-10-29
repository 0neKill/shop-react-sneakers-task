import React from 'react';
import {  RouteObject } from 'react-router-dom';

import { RootError } from '../pages/error-boundries';
import { Routes } from './enum';

const RootPage = React.lazy(() => import('../pages/root/root.page'));
const BasketModule = React.lazy(() => import('../pages/root/modules/basket/basket.module'));
const CatalogModule = React.lazy(() => import('../pages/root/modules/catalog/catalog.module'));
const ProfilePage = React.lazy(() => import('../pages/root/modules/profile/profile.module'));
const FavoriteModule = React.lazy(() => import('../pages/root/modules/favorite/favorite.module'));

export const routesWithPath: { [keys: string]: RouteObject } = {
    [Routes.PROFILE]: {
        path: Routes.PROFILE,
        element: <React.Suspense fallback={<div>Loading ProfilePage </div>}><ProfilePage /></React.Suspense>,
    },
    [Routes.MAIN]: {
        index: true,
        element: <React.Suspense fallback={<div>loading 2</div>}><CatalogModule /></React.Suspense>,
    },
    [Routes.FAVORITE]: {
        path: Routes.FAVORITE,
        element: <React.Suspense fallback={<div>loading 3</div>}><FavoriteModule /></React.Suspense>,
    },
};

export const rootPageRoutes: RouteObject = {
    path: Routes.MAIN,
    element: <React.Suspense fallback={<div>loading 1</div>}><RootPage /></React.Suspense>,
    errorElement: <RootError />,
    children: [
        routesWithPath[Routes.MAIN],
        routesWithPath[Routes.PROFILE],
        routesWithPath[Routes.FAVORITE],
        {
            path: Routes.BASKET,
            element: <React.Suspense
                fallback={<div>loading 3 </div>}><BasketModule /></React.Suspense>,
        },
    ],
};


