import { inputBoxSizes } from '@src/utils/constants'
import cx from 'classnames'
import React, { FC, HTMLInputTypeAttribute, SyntheticEvent } from 'react'

export type InputBoxShape = {
  type?: HTMLInputTypeAttribute
  size?: inputBoxSizes
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  placeHolder?: string
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void
}

const selectSize: { [keys in inputBoxSizes]: string } = {
  large: 'p-4 text-lg h-12 text-lg',
  medium: 'p-3 text-lg h-10 text-md',
  small: 'p-2 h-8 text-sm',
  xsmall: 'p-1 h-6 text-xs',
}

const InputBox: FC<InputBoxShape> = ({
  type = 'text',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  className,
  placeHolder,
  onChange,
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeHolder}
      className={cx(
        selectSize[size],
        fullWidth ? 'w-full' : '',
        'bg-transparent outline-none',
        'rounded-md common-border-outline',
        className
      )}
      onChange={onChange}
    />
  )
}

export default InputBox
