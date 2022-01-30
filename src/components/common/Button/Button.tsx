import React, { forwardRef, MouseEventHandler } from "react";
import classNames from "classnames";
import { btnSizes, btnStyles } from "@utils/constants";
import styles from "./Button.module.scss";

interface Props {
	type?: "button" | "submit" | "reset";
	className?: string;
	btnSize?: btnSizes;
	btnStyles?: btnStyles;
	hover?: boolean;
	focus?: boolean;
	disabled?: boolean;
	social?: "google";
	fullWidth?: boolean;
	children?: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (
	{
		type = "button",
		className,
		btnSize = "medium",
		btnStyles = "default",
		hover = false,
		focus = false,
		disabled = false,
		social,
		fullWidth,
		children,
		onClick,
		...props
	}: Props,
	ref: React.Ref<HTMLButtonElement>,
) => {
	return (
		<button
			ref={ref}
			type={type}
			onClick={onClick}
			className={classNames(
				className,
				styles.ctn,
				styles[btnStyles],
				styles[btnSize],
				{
					[styles.fullWidth]: fullWidth,
					[styles.hover]: hover,
					[styles.focus]: focus,
					[styles.disabled]: disabled,
					[styles.google]: social === "google",
				},
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default forwardRef(Button);
