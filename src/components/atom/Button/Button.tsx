import { buttonSettings } from '@src/animations/common'
import { btnSizes, btnStyles } from '@src/utils/constants'
import cx from 'classnames'
import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'

export type ButtonShape = {
  type?: 'button' | 'submit' | 'reset'
  size?: btnSizes
  styles?: btnStyles
  activeHover?: boolean
  disabled?: boolean
  fullWidth?: boolean
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

const selectSize: { [keys in btnSizes]: string } = {
  large: 'px-16 text-lg h-16 rounded-lg text-lg',
  medium: 'px-10 text-lg h-12 rounded-md text-md',
  small: 'px-8 h-8 rounded-md text-sm',
  xsmall: 'px-6 h-6 rounded-md text-xs',
}

const selectStyle: { [keys in btnStyles]: string } = {
  primary: 'bg-primary-500 hover:bg-primary-700 focus:bg-primary-900',
  secondary: 'bg-secondary-500 hover:bg-secondary-700 focus:bg-secondary-900',
  tertiary: 'bg-slate-100 hover:bg-slate-200 focus:bg-slate-200',
  link: 'text-white bg-link-500 hover:bg-link-700 hover:text-link-400 focus:text-link-300',
  danger: 'bg-red-700 text-red-100 hover:bg-red-600 focus:bg-red-600',
  success: 'bg-green-700 text-green-100 hover:bg-green-600 focus:bg-green-600',
  warning: 'bg-orange-700 text-orange-100 hover:bg-orange-600 focus:bg-orange-600',
}

const Button = (
  {
    type = 'button',
    size = 'medium',
    styles = 'primary',
    activeHover = false,
    disabled = false,
    fullWidth = false,
    children,
    className,
    onClick,
  }: ButtonShape,
  ref: React.Ref<HTMLButtonElement>
) => {
  return (
    <motion.button
      {...(!disabled && activeHover && buttonSettings)}
      ref={ref}
      type={type}
      className={cx(
        selectSize[size],
        selectStyle[styles],
        'transition-colors focus:shadow-outline duration-150',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        fullWidth ? 'w-full' : '',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

export default forwardRef(Button)
