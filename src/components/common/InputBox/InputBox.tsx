import React, { ChangeEventHandler, MouseEventHandler } from "react";
import classNames from "classnames";
import styles from "./InputBox.module.scss";

interface Props {
	type?: "id" | "password";
	value: string | number;
	error?: string | boolean;
	className?: string;
	placeholder?: string;
	name: string;
	contentName?: string | "E-mail" | "Password";
	readOnly?: boolean;
	fontSize?: number;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onClick?: MouseEventHandler<HTMLInputElement>;
}

export default function InputBox({
	type = "id",
	value,
	error = "",
	className,
	name,
	contentName,
	placeholder,
	readOnly,
	fontSize,
	onChange,
	onClick,
}: Props): JSX.Element {
	return (
		<div className={classNames(className, styles.container)}>
			{contentName && (
				<label id={type} htmlFor={contentName}>
					{contentName}
				</label>
			)}
			<input
				type={type}
				className={classNames(styles.input, { [styles.error]: error })}
				onChange={onChange}
				onClick={onClick}
				name={name}
				value={value}
				style={{ fontSize }}
				readOnly={readOnly}
				placeholder={placeholder ? placeholder : `Enter your ${contentName}`}
			/>
			{typeof error === "string" && error && (
				<div className={styles.error_text}>
					<span>{error}</span>
				</div>
			)}
		</div>
	);
}
