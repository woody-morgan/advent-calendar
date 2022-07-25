import React, { FC, SyntheticEvent } from 'react'

import Icon, { SVGTypes } from './Icon'

export type IconButtonProps = {
  className?: string
  type?: 'button' | 'submit' | 'reset'
  name: SVGTypes
  size?: number
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
}

const IconButton: FC<IconButtonProps> = ({
  className,
  type = 'button',
  onClick,
  size,
  name,
  ...props
}) => {
  return (
    <button type={type} onClick={onClick} className={className} {...props}>
      <Icon size={size} name={name} />
    </button>
  )
}

export default IconButton
