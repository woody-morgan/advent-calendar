import { Moment } from "moment";
import { FC, createContext, useCallback, useContext, useState } from "react";
import { IAdventCalendarItem } from "../interface/advent-calendar";
import type { TModal } from "../interface/modal";

interface IModalContext {
	modal: TModal | null;
	modalOption: any;
	openLoginModal: () => void;
	openCalendarInfoModal: (contentInfo: IAdventCalendarItem) => void;
	openCalendarCreateModal: (createDate: Moment) => void;
	closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
	modal: null,
	modalOption: null,
	openLoginModal: () => {},
	openCalendarInfoModal: () => {},
	openCalendarCreateModal: () => {},
	closeModal: () => {},
});

export const useModal = (): IModalContext => useContext(ModalContext);

export const ModalProvider: FC = ({ children }) => {
	const [modal, setModal] = useState<TModal | null>(null);
	const [modalOption, setModalOption] = useState<any>();

	const closeModal = useCallback(() => {
		document.body.style.overflow = "auto";
		setModal(null);
		setModalOption(null);
	}, []);

	const openModal = useCallback(
		(modal: TModal, modalOption?: any) => {
			closeModal();
			document.body.style.overflow = "hidden";
			setModalOption(modalOption);
			setModal(modal);
		},
		[closeModal],
	);

	const openLoginModal = useCallback(() => {
		openModal("LOGIN", {});
	}, [openModal]);

	const openCalendarInfoModal = useCallback(
		(contentInfo: IAdventCalendarItem) => {
			openModal("CALENDAR-INFO", contentInfo);
		},
		[openModal],
	);

	const openCalendarCreateModal = useCallback(
		(createDate: Moment) => {
			openModal("CALENDAR-CREATE", createDate);
		},
		[openModal],
	);

	return (
		<ModalContext.Provider
			value={{
				modal,
				modalOption,
				openLoginModal,
				openCalendarInfoModal,
				openCalendarCreateModal,
				closeModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
