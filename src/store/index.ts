import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import api from '~/api';
import auth from '~/store/auth';

// Reducers
const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth,
});

// Middlewares
const middlewares = [api.middleware];

const formatKey = (key: string) => {
  // Replace invalid characters with "_"
  return key.replace(/[^a-zA-Z0-9.\-_]/g, '_');
};

const reduxStorage = {
  setItem: async (key: string, value: string) => {
    const formattedKey = formatKey(key);
    await SecureStore.setItemAsync(formattedKey, value);
  },
  getItem: async (key: string) => {
    const formattedKey = formatKey(key);
    return await SecureStore.getItemAsync(formattedKey);
  },
  removeItem: async (key: string) => {
    const formattedKey = formatKey(key);
    await SecureStore.deleteItemAsync(formattedKey);
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
