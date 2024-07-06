export interface IToastNotifyPromise {
	message: string;
	promise: Promise<unknown>;
}

type EventType = 'change';
