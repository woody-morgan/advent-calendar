import classNames from 'classnames'
import { FC } from 'react'

const HorizontalLine: FC<{
  borderColor?: string
}> = ({ borderColor }) => {
  return (
    <hr
      className={classNames(
        'border-[1px] border-solid border-primary-500 h-[1px] m-0 p-0',
        borderColor
      )}
    />
  )
}

export default HorizontalLine
