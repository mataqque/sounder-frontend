'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Upload from '@/app/dashboard/components/modalupload/modalupload';
import { Modal } from '@/components/global/modal/modal';
import { usePocket } from '@/components/context/PocketProvider';
const persistor = persistStore(store);
export function Providers({ children }: any) {
	const { user } = usePocket();
	console.log('user', user);
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Modal id='upload' index={10}>
					<Upload></Upload>
				</Modal>
				{children}
			</PersistGate>
		</Provider>
	);
}
