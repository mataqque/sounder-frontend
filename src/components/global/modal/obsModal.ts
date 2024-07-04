import { BehaviorSubject } from 'rxjs';

export type ModalState = Record<string, { value: boolean; fn?: Function }>;

export const obsModal = new BehaviorSubject<ModalState>({});
