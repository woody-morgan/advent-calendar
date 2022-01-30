import React, { useCallback, useMemo, useState } from "react";
import { Button } from "@src/components/common";
import styles from "./CalendarInfoModal.module.scss";
import { IAdventCalendarItem } from "@src/core/interface/advent-calendar";
import classNames from "classnames";
import moment from "moment";

import {
	updateCalendarByID,
	deleteCalendarByID,
} from "@core/api/advent-calendar";
import { useCalendar } from "@src/core/context/CalendarStore";
import { useModal } from "@src/core/context/ModalStore";

interface IProps {
	options: IAdventCalendarItem;
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
	const selectedDate = moment(options.openDate);
	const isAfterToday = selectedDate.isAfter(moment());
	const { updateCalendarItem, deleteCalendarItem } = useCalendar();
	const { closeModal } = useModal();
	const [Inputs, setInputs] = useState<IInputs>({
		name: options.name ?? "",
		title: isAfterToday ? "오픈일이 아닙니다" : options.title ?? "",
		body: isAfterToday ? "오픈일이 아닙니다" : options.body ?? "",
	});

	const [isEditable, setEditable] = useState<boolean>(false);

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
		const { title, body } = Inputs;
		await updateCalendarByID(
			options.windowSeq,
			title,
			body,
			secretKey.key,
			selectedDate,
		);

		updateCalendarItem(selectedDate, {
			...options,
			title,
			body,
		});
		setEditable(false);
	}, [Inputs, options, secretKey.key, selectedDate, updateCalendarItem]);

	const handleCalendarDelete = useCallback(async () => {
		const inputSecretKey = prompt("수정키를 입력해주세요", "");
		if (!inputSecretKey) {
			return;
		}
		await deleteCalendarByID(options.windowSeq, inputSecretKey);
		deleteCalendarItem(selectedDate);
		closeModal();
	}, [closeModal, deleteCalendarItem, options.windowSeq, selectedDate]);

	const ButtonComp = useMemo(() => {
		return () => {
			return (
				<>
					{isEditable ? (
						<Button fullWidth btnStyles="secondary" onClick={handleSubmit}>
							제출하기
						</Button>
					) : (
						<>
							<Button
								fullWidth
								btnStyles="secondary"
								onClick={() => setEditable(true)}
							>
								수정하기
							</Button>
							<Button
								fullWidth
								btnStyles="danger"
								onClick={handleCalendarDelete}
							>
								삭제하기
							</Button>
						</>
					)}
				</>
			);
		};
	}, [handleCalendarDelete, handleSubmit, isEditable]);

	return (
		<div className={styles.cnt}>
			<div className={styles.item}>{selectedDate.format("YYYY-MM-DD")}</div>
			<div
				className={classNames(styles.item, {
					[styles.read_only]: true,
				})}
			>
				<label htmlFor="name">작성자</label>
				<input id="name" value={Inputs.name} onChange={handleInput} readOnly />
			</div>
			<div
				className={classNames(styles.item, {
					[styles.read_only]: !isEditable,
				})}
			>
				<label htmlFor="title">제목</label>
				<input
					id="title"
					value={Inputs.title}
					readOnly={!isEditable}
					onChange={handleInput}
				/>
			</div>
			{isEditable && (
				<div
					className={classNames(styles.item, {
						[styles.error]: !secretKey.isValid,
					})}
				>
					<label htmlFor="secret-key">
						수정키(7~16글자의 숫자, 영문자 혼합)
					</label>
					<input
						id="secret-key"
						type="password"
						value={secretKey.key}
						onChange={handleSecretKeyInput}
					/>
				</div>
			)}
			<div
				className={classNames(styles.item, {
					[styles.read_only]: !isEditable,
				})}
			>
				<label htmlFor="body">내용</label>
				<textarea
					id="body"
					value={Inputs.body}
					readOnly={!isEditable}
					onChange={handleInput}
				/>
			</div>

			<ButtonComp />
		</div>
	);
};

export default CalendarInfoModal;
