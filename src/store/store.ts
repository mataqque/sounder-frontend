'use client';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import paymentSlice from './globalSlice/payment.slice';
import cartbuySlice from './globalSlice/cartbuy.slice';
import modalCartSlice from './globalSlice/modalCart';
import { account } from './apis/authApi.api';
import { IProductSchema } from '@/common/interface/products.interface';
import { AccountState, CartbuyState, PaymentState } from './interface';
import { productApi } from './apis/products.api';
import { sellProductApi } from './apis/sellProducts';

interface RootState {
	modalCartSlice: {
		activeCart: string;
	};
	cartbuySlice: CartbuyState;
	paymentSlice: PaymentState;
	[sellProductApi.reducerPath]: any;
	[account.reducerPath]: any;
	[productApi.reducerPath]: any;
}

const middleware = [account.middleware, productApi.middleware, sellProductApi.middleware];
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartbuySlice', 'paymentSlice'],
};

const rootReducer = combineReducers<RootState>({
	modalCartSlice,
	cartbuySlice,
	paymentSlice,
	[account.reducerPath]: account.reducer,
	[productApi.reducerPath]: productApi.reducer,
	[sellProductApi.reducerPath]: sellProductApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleware),
});
