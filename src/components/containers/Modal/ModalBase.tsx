import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './ModalBase.module.scss'

interface ModalBaseShape {
  show: boolean
  title?: string
  children?: ReactNode
  onClose: () => void
}

const ModalBase: FC<ModalBaseShape> = ({ show, title, onClose, children }) => {
  return (
    <div className={classNames(styles.cnt, { [styles.active]: show })}>
      <div
        className={styles.overlay}
        onClick={() => {
          onClose()
        }}
      />
      <div className={styles.modal_con}>
        <div className={styles.modal_head}>
          <button
            className={styles.close}
            onClick={() => {
              onClose()
            }}
          >
            X
          </button>
          <div>{title}</div>
          <div />
        </div>
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  )
}

export default ModalBase
