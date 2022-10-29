import React from 'react';
import { Outlet } from 'react-router-dom';

import './root.style.scss';

import { Container, Header } from 'components';
import { Routes } from 'routes/enum';
import { routesWithPath } from 'routes/root.routes';
import { useLocation } from 'helpers';


export default function RootPage() {
    const local = useLocation();
    return (
        <div className='wrapper'>
            <Header />
            <Container className='wrapper__container'>
                {local.pathname === Routes.BASKET && routesWithPath[local.state.pathname].element}
                <Outlet />
            </Container>
        </div>
    );
};