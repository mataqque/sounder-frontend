import React, { type KeyboardEvent, useEffect, useRef, createContext, useState } from 'react';
import { obsModal } from './obsModal';
import { generateId } from '@/helpers/helpers';

interface ModalProps {
	id?: string;
	initActive?: boolean;
	index?: number;
	children: React.ReactElement<{ onClose: (value: boolean) => void }>;
}

interface ModalContextProps {
	/**
	 * value receives a boolean value, false to close the modal and true to open it
	 * @type {string}
	 */
	onClose: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({
	onClose: () => {},
});

export const Modal = ({ index = 10, children, initActive = false, id = generateId({ type: 'string' }) }: ModalProps) => {
	const [onMouseModal, setMouseModal] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const closeModal = (value: boolean) => {
		setShowModal(value);
		obsModal.next({ [id]: { value } });
	};
	useEffect(() => {
		if (initActive) {
			setShowModal(true);
		}
		const handleEscapeKey = (e: KeyboardEvent, nameID: string) => {
			if (e.key === 'Escape' && onMouseModal) {
				closeModal(false);
			}
		};

		document.addEventListener('keydown', handleEscapeKey as any);
		const modal = obsModal.subscribe(data => {
			if (data[id]) {
				setShowModal(data[id].value);
			}
		});
		return () => {
			document.removeEventListener('keydown', handleEscapeKey as any);
			modal.unsubscribe();
		};
	}, [showModal, onMouseModal]);

	return (
		<ModalContext.Provider value={{ onClose: closeModal }}>
			<div
				className={`popup-global fixed h-[100vh] min-h-full w-full top-0 backdrop-blur-[1px] left-0 bg-[#00000061] filter-blur items-center justify-center opacity-0 pointer-events-none duration-300 [&.active]:opacity-100 [&.active]:pointer-events-auto flex py-20 mobile:items-start ${
					showModal ? 'active' : ''
				}`}
				style={{ zIndex: index }}
				onMouseEnter={() => {
					setMouseModal(true);
				}}
				onMouseLeave={() => {
					setMouseModal(false);
				}}
			>
				{children}
			</div>
		</ModalContext.Provider>
	);
};
