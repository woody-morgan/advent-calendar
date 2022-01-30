import React, {FC} from "react";
import ModalPortal from "./ModalPortal";
import ModalBase from "./ModalBase";
import {useModal} from "@core/context/ModalStore";
import {SignInModal} from "@src/components/containers";
import {TModal} from "@src/core/interface/modal";
import {CalendarCreateModal, CalendarInfoModal} from "@components/containers";

const ModalContainer: FC = () => {
    const {modal, modalOption, closeModal} = useModal();

    const SelectRenderingModal: { [keys in TModal]: JSX.Element } = {
        "LOGIN": <SignInModal onClose={closeModal}/>,
        "CALENDAR-INFO": <CalendarInfoModal onClose={closeModal} options={modalOption}/>,
        "CALENDAR-CREATE": <CalendarCreateModal onClose={closeModal} options={modalOption}/>,
    };

    return (
        <ModalPortal>
            <ModalBase onClose={closeModal} show={!!modal}>
                {modal ? SelectRenderingModal[modal] : null}
            </ModalBase>
        </ModalPortal>
    );
};

export default ModalContainer;
