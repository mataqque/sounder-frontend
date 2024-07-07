export interface IToastNotifyPromise {
	message: string;
	promise: Promise<unknown>;
}

type EventType = 'change';

export interface TypeGeneric {
	number: string;
	string: string;
}