import React, { FC, useCallback, useMemo, useState } from "react";
import {
	DayPickerSingleDateController,
	isSameDay,
	ModifiersShape,
} from "react-dates";
import type { DayPickerSingleDateControllerShape } from "react-dates";
import moment from "moment";
import type { Moment } from "moment";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.scss";
import styles from "./Calendar.module.scss";

import { isInclusivelyBeforeDay, isInclusivelyAfterDay } from "react-dates";
import { useModal } from "@src/core/context/ModalStore";
import useWindowSize from "@src/core/hooks/useWindowSize";
import { useCalendar } from "@core/context/CalendarStore";

// react dates
export default React.PureComponent;
export const pureComponentAvailable = true;

interface IInputs {
	focused: boolean;
	date: Moment | null;
}

export const Calendar: FC<Partial<DayPickerSingleDateControllerShape>> = (
	props,
) => {
	const { width } = useWindowSize();
	const { openCalendarInfoModal, openCalendarCreateModal } = useModal();
	const { isInit, calendarItems } = useCalendar();
	const [Inputs, setInputs] = useState<IInputs>({
		focused: true,
		date: null,
	});

	const DaySizeMemo = useMemo(() => {
		if (!width || width > 768) return 120;
		else return 50;
	}, [width]);

	// Logics for Calendar Control
	const renderWeekHeaderElement = useCallback((day: string) => {
		return <div className={styles.week_header}>{day}</div>;
	}, []);

	const handleDateChange = useCallback((date: Moment | null) => {
		setInputs((prev) => ({ ...prev, date }));
	}, []);

	const handleFocusChange = () => {
		setInputs({ ...Inputs, focused: true });
	};

	const renderCalendarInfo = useCallback(() => {
		return (
			<ol className={styles.info_text}>
				<li>한 칸에 한 명만 등록할 수 있습니다</li>
				<li>
					글을 등록할 수 있는 기한은&nbsp;
					{process.env.REACT_APP_CALENDAR_START_DATE}부터&nbsp;
					{process.env.REACT_APP_CALENDAR_END_DATE}&nbsp;입니다
				</li>
				<li>자신이 쓴 글을 수정할 수 없다면 관리자에게 문의해주세요</li>
			</ol>
		);
	}, []);

	const handleEmptyDayCellClick = useCallback(
		(selectedDate: Moment) => {
			openCalendarCreateModal(selectedDate);
		},
		[openCalendarCreateModal],
	);

	const handleFullDayCellClick = useCallback(
		(calendarItem) => {
			openCalendarInfoModal(calendarItem);
		},
		[openCalendarInfoModal],
	);

	const renderDayContents = useCallback(
		(day: moment.Moment, modifiers: ModifiersShape) => {
			if (!isInit) return <div></div>;
			const result = calendarItems.get(day.format("YYYY-MM-DD"));
			if (!result)
				return (
					<>
						{modifiers.has("valid") && (
							<div
								className={styles.day_cell_cnt}
								onClick={() => handleEmptyDayCellClick(day)}
							>
								<div className={styles.day_cell_header}>
									<div>{day.format("D")}</div>
								</div>
								<div className={styles.day_cell_body}>
									<div className={styles.avail}>+</div>
								</div>
							</div>
						)}
					</>
				);
			return (
				<>
					{modifiers.has("valid") && modifiers.has("highlighted-calendar") && (
						<div
							className={styles.day_cell_cnt}
							onClick={() => handleFullDayCellClick(result)}
						>
							<div className={styles.day_cell_header}>
								<div>{day.format("D")}</div>
								<div className={styles.profile}>
									<img
										src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&h=30&q=80"
										width={20}
										height={20}
										alt=""
									/>
									<span>{result?.name}</span>
								</div>
							</div>
							<div className={styles.day_cell_body}>
								<div className={styles.highlighted}>
									{result?.body ?? "컨텐츠가 비어있습니다"}&nbsp;
								</div>
							</div>
						</div>
					)}
				</>
			);
		},
		[calendarItems, handleEmptyDayCellClick, handleFullDayCellClick, isInit],
	);

	return (
		<DayPickerSingleDateController
			{...props}
			initialVisibleMonth={() => moment()}
			isOutsideRange={(day) =>
				!isInclusivelyAfterDay(
					day,
					moment(process.env.REACT_APP_CALENDAR_START_DATE),
				) ||
				!isInclusivelyBeforeDay(
					day,
					moment(process.env.REACT_APP_CALENDAR_END_DATE),
				)
			}
			transitionDuration={300}
			daySize={DaySizeMemo}
			numberOfMonths={1}
			hideKeyboardShortcutsPanel
			focused={Inputs.focused}
			date={Inputs.date}
			isDayHighlighted={(day1) =>
				Array.from(calendarItems.keys()).some((day2) =>
					isSameDay(day1, moment(day2)),
				)
			}
			onDateChange={handleDateChange}
			onFocusChange={handleFocusChange}
			renderDayContents={renderDayContents}
			renderWeekHeaderElement={renderWeekHeaderElement}
			renderCalendarInfo={renderCalendarInfo}
		/>
	);
};
