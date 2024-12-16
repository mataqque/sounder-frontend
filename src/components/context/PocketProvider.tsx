'use client';

import PocketBase, { AuthModel } from 'pocketbase';
import { useInterval } from 'usehooks-ts';
import { jwtDecode } from 'jwt-decode';
import ms from 'ms';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
const fiveMinutesInMs = ms('5 minutes');
const twoMinutesInMs = ms('2 minutes');
const BASE_URL = 'http://localhost:8080';

interface PocketProviderContextProps {
	pb: {};
	token: string;
	user: AuthModel;
	register: Function;
	login: Function;
	logout: Function;
}

const PocketContext = createContext<PocketProviderContextProps>({
	pb: {} as any,
	token: '',
	user: {} as any,
	register: (email: string, password: string): Promise<any> => {
		return Promise.resolve({});
	},
	login: (email: string, password: string): Promise<any> => {
		return Promise.resolve({});
	},
	logout: () => {},
});

export const PocketProvider = ({ children }: { children: React.ReactNode }) => {
	const pb = useMemo(() => new PocketBase(BASE_URL), []);

	const [token, setToken] = useState<string>(pb.authStore.token);
	const [user, setUser] = useState<AuthModel>(pb.authStore.model);

	useEffect(() => {
		return pb.authStore.onChange((token, model) => {
			setToken(token);
			setUser(model);
		});
	}, []);

	const register = useCallback(async (email: string, password: string): Promise<any> => {
		return await pb.collection('users').create({ email, password, passwordConfirm: password });
	}, []);

	const login = useCallback(async (email: string, password: string): Promise<any> => {
		return await pb.collection('users').authWithPassword(email, password);
	}, []);

	const logout = useCallback(() => {
		pb.authStore.clear();
	}, []);

	const refreshSession = useCallback(async () => {
		if (!pb.authStore.isValid) return;
		const decoded = jwtDecode(token);

		const tokenExpiration = decoded.exp;
		const expirationWithBuffer = ((decoded.exp ?? 0) + fiveMinutesInMs) / 1000;
		if (!tokenExpiration) return;
		if (tokenExpiration < expirationWithBuffer) {
			await pb.collection('users').authRefresh();
		}
	}, [token]);

	useInterval(refreshSession, token ? twoMinutesInMs : null);

	return <PocketContext.Provider value={{ register, login, logout, user, token, pb }}>{children}</PocketContext.Provider>;
};
export const usePocket = () => useContext(PocketContext);
