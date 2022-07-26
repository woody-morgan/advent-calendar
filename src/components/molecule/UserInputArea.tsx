import { HorizontalLine } from '@src/components/atom'
import classNames from 'classnames'
import React, { BaseSyntheticEvent, FC, memo } from 'react'

export const UserInputWrapper: FC<{
  label: string
  imageLabelName?: string
  id: string
  children: React.ReactNode
}> = memo(({ label, imageLabelName, id, children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <label htmlFor={id} className="text-md font-bold">
          {label}
        </label>
        {imageLabelName && (
          <a
            href={'https://wiki.zeropage.org/wiki.php/' + imageLabelName}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/ZeroWiki-212121?style=flat-square"
              alt="Wiki Link"
            />
          </a>
        )}
      </div>
      {children}
    </div>
  )
})

const UserInputArea: FC<{
  label: string
  imageLabelName?: string
  id: string
  type?: 'text' | 'password'
  areaType?: 'textarea' | 'input'
  value: string
  readOnly?: boolean
  isError?: boolean
  onChange: (e: BaseSyntheticEvent) => void
}> = ({
  label,
  imageLabelName,
  id,
  type = 'text',
  areaType = 'input',
  isError = false,
  ...props
}) => {
  return (
    <UserInputWrapper label={label} imageLabelName={imageLabelName} id={id}>
      {areaType === 'textarea' ? (
        <textarea
          className={classNames(
            'p-1/2 bg-transparent min-h-[5rem] outline-none text-sm',
            isError && 'border-red-500 border-2 border-solid'
          )}
          id={id}
          {...props}
        />
      ) : (
        <input
          className={classNames(
            'p-1/2 bg-transparent h-6 outline-none text-sm',
            isError && 'border-red-500 border-2 border-solid'
          )}
          id={id}
          type={type}
          {...props}
        />
      )}
      <HorizontalLine />
    </UserInputWrapper>
  )
}

export default memo(UserInputArea)
