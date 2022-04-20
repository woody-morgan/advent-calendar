import { AppDispatch, RootState } from "@src/store";
import { useDispatch, useSelector } from "react-redux";

type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

// Typed Selector Hook
export function useRootState<T>(
	selector: StateSelector<T>,
	equalityFn?: EqualityFn<T>,
) {
	return useSelector(selector, equalityFn);
}

// Typed Dispatch Hook
export const useRootDispatch = () => useDispatch<AppDispatch>();
