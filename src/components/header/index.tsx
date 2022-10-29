import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';


import { Routes } from 'routes/enum';
import { Container } from 'components';
import { BasketSvg, FavoriteSvg, ProfileSvg, useLocation, useScroll, useTypedSelectorHook } from 'helpers';
import { FormattedMessage } from 'features';


export const Header: React.FunctionComponent = () => {
    const local = useLocation();
    const headerRef = useScroll();
    const total_price = useTypedSelectorHook(state => state.basketReducer.total_price);

    return (
        <header className='header' ref={headerRef}>
            <Container className='header__container'>
                <div className='header__logo'>
                    <NavLink to={Routes.MAIN} className='logo__img'>
                        <img src='/assets/images/logo.png' alt='logo' />
                    </NavLink>
                    <div className='logo__content'>
                        <h1 className='logo__title'>REACT SNEAKERS</h1>
                        <p className='logo__subtitle'><FormattedMessage name='best.sneakers' /></p>
                    </div>
                </div>
                <nav className='header__info'>
                    <div className='info__price'>
                        <NavLink to={Routes.BASKET} className=' info__img price__basket'
                                 state={{ pathname: local.pathname }}>
                            <BasketSvg />
                        </NavLink>
                        <p className='info__title'>
                            <FormattedMessage name='value' value={{ sum: total_price }} />.
                        </p>
                    </div>
                    <NavLink to={Routes.FAVORITE} className='info__img favorite'>
                        <FavoriteSvg />
                    </NavLink>
                    <NavLink to={Routes.PROFILE} className='info__img profile'>
                        <ProfileSvg />
                    </NavLink>
                </nav>
            </Container>
        </header>
    );
};