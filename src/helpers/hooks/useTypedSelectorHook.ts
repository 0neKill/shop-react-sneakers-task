import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { CombineReducers } from 'store/reducers';

export const useTypedSelectorHook: TypedUseSelectorHook<CombineReducers> = useSelector;