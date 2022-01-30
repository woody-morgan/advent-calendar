import React, { useCallback, useMemo, useState } from "react";
import { Moment } from "moment";
import { createCalendar } from "@core/api/advent-calendar";
import { Button } from "@components/common";
import styles from "./CalendarCreateModal.module.scss";
import { useModal } from "@core/context/ModalStore";
import { toast } from "react-toastify";
import classNames from "classnames";
import { useCalendar } from "@src/core/context/CalendarStore";

interface IProps {
	options: Moment;
	onClose: () => void;
}

interface IInputs {
	name: string;
	title: string;
	body: string;
}

interface ISecretKey {
	key: string;
	isValid: boolean;
}

const CalendarInfoModal = ({ onClose, options }: IProps) => {
	const selectedDate = options;
	const { openCalendarInfoModal, closeModal } = useModal();
	const { addCalendarItem, getNewData } = useCalendar();
	const [Inputs, setInputs] = useState<IInputs>({
		name: "",
		title: "",
		body: "",
	});

	const [secretKey, setSecretKey] = useState<ISecretKey>({
		key: "",
		isValid: false,
	});

	const pwRegex = useMemo(() => /^[A-Za-z]\w{7,14}$/, []);

	const handleInput = useCallback((e) => {
		const { id, value } = e.target;
		setInputs((prev) => ({ ...prev, [id]: value }));
	}, []);

	const handleSecretKeyInput = useCallback(
		(e) => {
			const { value } = e.target;
			const isCorrect = value.match(pwRegex);
			setSecretKey({ key: value, isValid: isCorrect });
		},
		[pwRegex],
	);

	const handleSubmit = useCallback(async () => {
		if (!secretKey.isValid) {
			toast.error("수정키는 7~16글자의 숫자,영문자 혼합이어야합니다");
			return;
		}
		const { name, title, body } = Inputs;
		try {
			const result = await createCalendar(
				name,
				title,
				body,
				selectedDate,
				secretKey.key,
			);
			addCalendarItem(selectedDate, result);
			openCalendarInfoModal(result);
		} catch (err) {
			getNewData();
			closeModal();
		}
	}, [
		Inputs,
		addCalendarItem,
		closeModal,
		getNewData,
		openCalendarInfoModal,
		secretKey.isValid,
		secretKey.key,
		selectedDate,
	]);

	return (
		<div className={styles.cnt}>
			<div className={styles.item}>{selectedDate.format("YYYY-MM-DD")}</div>
			<div className={styles.item}>
				<label htmlFor="name">작성자</label>
				<input
					id="name"
					type="text"
					value={Inputs.name}
					onChange={handleInput}
				/>
			</div>
			<div className={styles.item}>
				<label htmlFor="title">제목</label>
				<input
					id="title"
					type="text"
					value={Inputs.title}
					onChange={handleInput}
				/>
			</div>
			<div
				className={classNames(styles.item, {
					[styles.error]: !secretKey.isValid,
				})}
			>
				<label htmlFor="secret-key">수정키(7~16글자의 숫자, 영문자 혼합)</label>
				<input
					id="secret-key"
					type="password"
					value={secretKey.key}
					onChange={handleSecretKeyInput}
				/>
			</div>
			<div className={styles.item}>
				<label htmlFor="body">내용</label>
				<textarea id="body" value={Inputs.body} onChange={handleInput} />
			</div>
			<Button fullWidth btnStyles="secondary" onClick={handleSubmit}>
				제출하기
			</Button>
		</div>
	);
};

export default CalendarInfoModal;
