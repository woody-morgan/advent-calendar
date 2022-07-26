import Portal from '@src/components/atom/Portal'
import CalendarModalSample from '@src/components/containers/Modal/CalendarModalSample'
import { useRootDispatch, useRootState } from '@src/hooks/useRootState'
import { closeModal, ModalType } from '@src/store/modules/modal'
import React, { FC } from 'react'

import ModalBase from './Modal/ModalBase'

const selectRenderingModal: { [keys in ModalType]: () => JSX.Element } = {
  'CALENDAR-SAMPLE': CalendarModalSample,
}

const ModalContainer: FC = () => {
  const modal = useRootState((state) => state.modal)
  const dispatch = useRootDispatch()

  const ModalComponent = modal.name ? selectRenderingModal[modal.name] : null

  return (
    <Portal selectorId="modal">
      <ModalBase
        transitionKey={modal.transitionKey as number}
        show={modal.name ? true : false}
        onClose={() => {
          dispatch(closeModal())
        }}
      >
        {ModalComponent && <ModalComponent />}
      </ModalBase>
    </Portal>
  )
}

export default ModalContainer
