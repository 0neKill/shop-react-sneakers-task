import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as actions from 'store/actions';

export const useDispatchActions = () => {
    const dispatch = useDispatch();

    return React.useMemo(() => {
        return bindActionCreators(actions, dispatch);
    }, [dispatch]);

};