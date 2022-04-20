import React, { forwardRef } from 'react'
import { btnSizes, btnStyles } from '@utils/constants'
import classnames, { TTailwindString } from 'tailwindcss-classnames'

interface ButtonShape {
  type?: 'button' | 'submit' | 'reset'
  size?: btnSizes
  styles?: btnStyles
  disabled?: boolean
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const selectSize: { [keys in btnSizes]: string } = {
  large: 'px-16 text-lg h-16 rounded-lg',
  medium: 'px-10 text-lg h-12 rounded-md',
  small: 'px-8 h-8 rounded-md',
  xsmall: 'px-6 h-6 rounded-md',
}

const selectStyle: { [keys in btnStyles]: string } = {
  primary: 'bg-slate-700 text-slate-100 hover:bg-slate-600 focus:bg-slate-600',
  secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:bg-slate-200',
  tertiary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:bg-slate-200',
  link: 'text-slate-700 hover:text-indigo-600 focus:text-indigo-600',
  danger: 'bg-red-700 text-red-100 hover:bg-red-600 focus:bg-red-600',
  success: 'bg-green-700 text-green-100 hover:bg-green-600 focus:bg-green-600',
  warning: 'bg-orange-700 text-orange-100 hover:bg-orange-600 focus:bg-orange-600',
}

const Button = (
  {
    type = 'button',
    size = 'medium',
    styles = 'primary',
    disabled = false,
    fullWidth = false,
    children,
    onClick,
  }: ButtonShape,
  ref: React.Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      type={type}
      className={classnames(
        selectSize[size] as TTailwindString,
        selectStyle[styles] as TTailwindString,
        'transition-colors bg-slate focus:shadow-outline duration-150' as TTailwindString,
        (disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer') as TTailwindString,
        (fullWidth ? 'w-full' : '') as TTailwindString
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default forwardRef(Button)
