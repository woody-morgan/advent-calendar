import React, {
	FocusEventHandler,
	useCallback,
	useEffect,
	useRef,
} from "react";
import styles from "./PopupLayout.module.scss";

interface IPopupLayoutProps {
	children: React.ReactNode;
	onClose: () => void;
}

const PopupLayout = (props: IPopupLayoutProps) => {
	const { children, onClose } = props;
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		containerRef?.current?.focus();
	}, []);

	const handleBlur: FocusEventHandler = useCallback(
		(e) => {
			if (!e.currentTarget.contains(e.relatedTarget as Node)) {
				onClose?.();
			}
		},
		[onClose],
	);

	return (
		<div
			tabIndex={0}
			ref={containerRef}
			className={styles.container}
			onBlur={handleBlur}
		>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default PopupLayout;
