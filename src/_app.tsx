import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';

import { routes } from 'routes';
import { store } from 'store';
import { IntlProvider } from 'features';


export const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <IntlProvider defaultLang={'ru'}>
                <RouterProvider router={routes} />
            </IntlProvider>
        </Provider>
    );
};