import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, useStore } from 'react-redux';
import settingsReducer from './slices/settingsSlice';

export const makeStore = () => configureStore({
  reducer: {
    settings: settingsReducer,
  },
  devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
export default makeStore;
