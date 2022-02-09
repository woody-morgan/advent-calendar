import React, { FC } from "react";
import classNames from "classnames";
import styles from "./ModalBase.module.scss";

interface IModalBase {
	show: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const ModalBase: FC<IModalBase> = ({ show, onClose, children }: IModalBase) => {
	return (
		<div className={classNames(styles.cnt, { [styles.active]: show })}>
			<div
				className={styles.overlay}
				onClick={() => {
					onClose();
				}}
			/>
			<div className={styles.modal_con}>
				<div className={styles.modal_head}>
					<button
						className={styles.close}
						onClick={() => {
							onClose();
						}}
					>
						X
					</button>
					<div>Advent Calendar</div>
					<div />
				</div>
				<div className={styles.contents}>{children}</div>
			</div>
		</div>
	);
};

export default ModalBase;
