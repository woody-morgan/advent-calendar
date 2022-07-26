import { PortalType } from '@src/core/types/portal-type'
import React, { FC } from 'react'
import { createPortal } from 'react-dom'

const Portal: FC<{
  selectorId: PortalType
  children: React.ReactNode
}> = ({ selectorId, children }) => {
  return createPortal(children, document.getElementById(selectorId) as HTMLElement)
}

export default Portal
