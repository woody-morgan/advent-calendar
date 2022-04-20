import { createSlice } from "@reduxjs/toolkit";
import { CalendarItemShape } from "@src/interface/advent-calendar";

export type CalendarInfoShape = {
	init: boolean;
	calendarItems: Map<string, CalendarItemShape>;
};

const initialState: CalendarInfoShape = {
	init: false,
	calendarItems: new Map(),
};

const calendarSlice = createSlice({
	name: "calendar",
	initialState,
	reducers: {
		getData: (state) => {
			console.log(1);
		},
	},
	extraReducers: {},
});

// Create Action
export const { getData } = calendarSlice.actions;
// Reducer
export default calendarSlice.reducer;
