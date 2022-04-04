import { FC, useCallback } from "react";
import styles from "./home.module.scss";
import { PageLayout } from "@src/components/layout";
import { Calendar } from "@src/components/common";
import { Moment } from "moment";
import { useModal } from "@src/core/context/ModalStore";
import moment from "moment";
import {
	isInclusivelyAfterDay,
	isInclusivelyBeforeDay,
	isSameDay,
	ModifiersShape,
} from "react-dates";
import { useCalendar } from "@src/core/context/CalendarStore";
import {
	CalendarWithEmpty,
	CalendarWithFilled,
	CustomCalendarInfo,
	CustomWeekHeaderElement,
} from "./CalendarContent/CalendarContent";

const Home: FC = () => {
	const { isInit, calendarItems } = useCalendar();
	const { openCalendarInfoModal, openCalendarCreateModal } = useModal();

	const renderDayContents = useCallback(
		(day: Moment, modifiers: ModifiersShape) => {
			if (!isInit) return <div />;
			const result = calendarItems.get(day.format("YYYY-MM-DD"));
			if (!result && modifiers.has("valid")) {
				return (
					<CalendarWithEmpty
						day={day}
						onClick={() => openCalendarCreateModal(day)}
					/>
				);
			}
			if (result && modifiers.has("highlighted-calendar")) {
				return (
					<CalendarWithFilled
						day={day}
						data={result}
						onClick={() => openCalendarInfoModal(result)}
					/>
				);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[calendarItems, isInit],
	);

	return (
		<PageLayout enablePageTransition>
			<div className={styles.container}>
				<Calendar
					initialVisibleMonth={() => moment("2022-02-01")}
					renderDayContents={renderDayContents}
					renderWeekHeaderElement={CustomWeekHeaderElement}
					renderCalendarInfo={CustomCalendarInfo}
					isDayHighlighted={(day1) =>
						Array.from(calendarItems.keys()).some((day2) =>
							isSameDay(day1, moment(day2)),
						)
					}
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
				/>
			</div>
		</PageLayout>
	);
};

export default Home;
