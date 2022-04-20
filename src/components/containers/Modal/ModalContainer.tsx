import React, { FC } from 'react'
import ModalPortal from './ModalPortal'
import ModalBase from './ModalBase'
import { CalendarCreateModal, CalendarInfoModal } from '@components/containers'
import { useRootDispatch, useRootState } from '@src/hooks/useRootState'
import { close, ModalType } from '@src/store/modules/modal'
import { Moment } from 'moment'
import { CalendarItemShape } from '@src/interface/advent-calendar'

const ModalContainer: FC = () => {
  const modal = useRootState((state) => state.modal)
  const dispatch = useRootDispatch()

  const selectRenderingModal: { [keys in ModalType]: JSX.Element } = {
    'CALENDAR-INFO': <CalendarInfoModal options={modal.option as CalendarItemShape} />,
    'CALENDAR-CREATE': <CalendarCreateModal options={modal.option as Moment} />,
  }

  return (
    <ModalPortal>
      <ModalBase
        title={modal.title ?? 'Advent Calendar'}
        show={modal.name ? true : false}
        onClose={() => {
          dispatch(close())
        }}
      >
        {modal.name ? selectRenderingModal[modal.name] : null}
      </ModalBase>
    </ModalPortal>
  )
}

export default ModalContainer
