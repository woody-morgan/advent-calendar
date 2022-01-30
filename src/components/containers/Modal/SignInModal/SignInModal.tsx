import React, { ChangeEvent, useState } from "react";
import { Button, InputBox } from "@src/components/common";
import styles from "./SignInModal.module.scss";

interface IProps {
	onClose: () => void;
}

interface IInputs {
	email: string;
	pwd: string;
}

const SignInModal = ({ onClose }: IProps) => {
	const [Inputs, setInputs] = useState<IInputs>({
		email: "",
		pwd: "",
	});

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className={styles.cnt}>
			<InputBox
				value={Inputs?.email}
				name="email"
				contentName="E-mail"
				onChange={handleOnChange}
			/>
			<Button fullWidth btnStyles="secondary">
				로그인
			</Button>
		</div>
	);
};

export default SignInModal;
