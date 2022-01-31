import { useCallback, useMemo, useState } from "react";
import { Button } from "@src/components/common";
import styles from "./CalendarInfoModal.module.scss";
import { IAdventCalendarItem } from "@src/core/interface/advent-calendar";
import classNames from "classnames";
import moment from "moment";

import {
	validateSecretKey,
	getCalendarBySecretKey,
	updateCalendarByID,
	deleteCalendarByID,
} from "@core/api/advent-calendar";
import { useCalendar } from "@src/core/context/CalendarStore";
import { useModal } from "@src/core/context/ModalStore";
import { isValidPwd } from "@src/utils/check";

interface IProps {
	options: IAdventCalendarItem;
	onClose: () => void;
}

interface IInputs {
	name: string;
	title: string;
	body: string;
	contentUrl: string;
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
		contentUrl: isAfterToday ? "오픈일이 아닙니다" : options.contentUrl ?? "",
	});

	const [isEditable, setEditable] = useState<boolean>(false);

	const [secretKey, setSecretKey] = useState<ISecretKey>({
		key: "",
		isValid: false,
	});

	const handleInput = useCallback((e) => {
		const { id, value } = e.target;
		setInputs((prev) => ({ ...prev, [id]: value }));
	}, []);

	const handleSecretKeyInput = useCallback((e) => {
		const { value } = e.target;
		const isCorrect = isValidPwd(value);
		setSecretKey({ key: value, isValid: isCorrect });
	}, []);

	const handleEdit = useCallback(async () => {
		const inputSecretKey = prompt("수정키를 입력해주세요", "");
		if (!inputSecretKey) {
			return;
		}
		const isValid = await validateSecretKey(options.windowSeq, inputSecretKey);
		if (!isValid) return;
		const result = await getCalendarBySecretKey(
			options.windowSeq,
			inputSecretKey,
		);
		setSecretKey({ key: inputSecretKey, isValid: true });
		setInputs((prev) => ({
			...prev,
			title: result.title ?? "",
			body: result.body ?? "",
			contentUrl: result.contentUrl ?? "",
		}));
		setEditable(true);
	}, [options.windowSeq]);

	const handleSubmit = useCallback(async () => {
		const { title, body, contentUrl } = Inputs;
		await updateCalendarByID(
			options.windowSeq,
			title,
			body,
			secretKey.key,
			selectedDate,
			contentUrl,
		);

		updateCalendarItem(selectedDate, {
			...options,
			title,
			body,
			contentUrl,
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
							<Button fullWidth btnStyles="secondary" onClick={handleEdit}>
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
	}, [handleCalendarDelete, handleEdit, handleSubmit, isEditable]);

	return (
		<div className={styles.cnt}>
			<div className={styles.item}>{selectedDate.format("YYYY-MM-DD")}</div>
			<div
				className={classNames(styles.item, {
					[styles.read_only]: true,
				})}
			>
				<label htmlFor="name">작성자</label>
				<input
					id="name"
					type="text"
					value={Inputs.name}
					onChange={handleInput}
					readOnly
				/>
				<a
					href={"https://wiki.zeropage.org/wiki.php/" + Inputs.name}
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="https://img.shields.io/badge/ZeroWiki-212121?style=flat-square"
						alt="Wiki Link"
					></img>
				</a>
			</div>
			<div
				className={classNames(styles.item, {
					[styles.read_only]: !isEditable,
				})}
			>
				<label htmlFor="title">제목</label>
				<input
					id="title"
					type="text"
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
				<label htmlFor="contentUrl">블로그 주소</label>
				{!isEditable ? (
					<a
						href={
							isAfterToday
								? "https://woodi97.github.io/zp-advent-calendar/"
								: Inputs.contentUrl
						}
					>
						{Inputs.contentUrl}
					</a>
				) : (
					<input
						id="contentUrl"
						type="text"
						value={Inputs.contentUrl}
						readOnly={!isEditable}
						onChange={handleInput}
					/>
				)}
			</div>
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
