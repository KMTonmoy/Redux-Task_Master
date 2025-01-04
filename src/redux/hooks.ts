// src/redux/hooks.ts
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './store';  
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
