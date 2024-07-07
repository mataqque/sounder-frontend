'use client';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { soundApi } from './apis/sellProducts';
import soundSlice from './slices/soundSlice';
import { ISoundsState } from './slices/sounds.interface';

export interface IRootState {
	soundSlice: ISoundsState;
}

const middleware = [soundApi.middleware];

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['soundSlice'],
};

const rootReducer = combineReducers({
	// [soundApi.reducerPath]: soundApi.reducer,
	soundSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware: any) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleware),
});
