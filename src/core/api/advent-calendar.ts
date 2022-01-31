import axios, { AxiosError } from "axios";
import type { Moment } from "moment";
import { toast } from "react-toastify";
import { IAdventCalendarItem } from "../interface/advent-calendar";

export const validateSecretKey = async (
	windowSeq: number,
	secretKey: string,
): Promise<boolean> => {
	const params = { secretKey: [secretKey] };
	try {
		const { data } = await axios.get(
			`/advent-windows/${windowSeq}/secret-key/validate`,
			{ params },
		);
		if (!data) {
			toast.error("인증에 실패했습니다");
		} else {
			toast.success("인증에 성공했습니다");
		}
		return data;
	} catch (err) {
		toast.error("알 수 없는 에러가 발생했습니다");
		throw err;
	}
};

export const getAllCalendars = async (): Promise<IAdventCalendarItem[]> => {
	try {
		toast.loading("로딩중", {
			toastId: 1,
		});
		const { data } = await axios.get("/advent-windows");
		toast.dismiss(1);
		toast.success("불러오기 완료");
		return data;
	} catch (err) {
		toast.dismiss(1);
		toast.error("데이터 불러오기에 실패했습니다. 새로고침 해주세요");
		throw err;
	}
};

export const getCalendarByID = async (
	windowSeq: number,
): Promise<IAdventCalendarItem> => {
	try {
		const { data } = await axios.get("advent-windows", {
			params: windowSeq,
		});
		return data;
	} catch (err) {
		throw err;
	}
};

export const getCalendarBySecretKey = async (
	windowSeq: number,
	secretKey: string,
): Promise<IAdventCalendarItem> => {
	const params = { secretKey: [secretKey] };
	try {
		const { data } = await axios.get(`advent-windows/${windowSeq}`, {
			params,
		});
		return data;
	} catch (err) {
		toast.error("수정키를 다시 확인해주세요");
		throw err;
	}
};

export const createCalendar = async (
	name: string,
	title: string,
	body: string,
	openDate: Moment,
	secretKey: string,
	contentUrl: string,
): Promise<IAdventCalendarItem> => {
	const postDate = openDate.format("YYYY-MM-DD");
	console.log(contentUrl);
	try {
		toast.loading("생성중입니다", {
			toastId: 2,
		});
		const { data } = await axios.post("advent-windows", {
			name: name,
			title: title,
			body: body,
			openDate: postDate,
			secretKey: secretKey,
			contentUrl: contentUrl,
		});
		toast.dismiss(2);
		toast.success("생성에 성공했습니다");
		return data;
	} catch (error) {
		const err = error as AxiosError;
		toast.dismiss(2);
		if (err.response?.status === 500) {
			toast.error("이미 생성되었습니다");
		} else if (err.response?.status === 409) {
			toast.error("비밀번호 형식이 맞지 않습니다");
		} else {
			toast.error("알 수 없는 이유로 통신에 실패했습니다");
		}
		throw err;
	}
};

export const updateCalendarByID = async (
	windowSeq: number,
	title: string,
	body: string,
	secretKey: string,
	openDate: Moment,
	contentUrl: string,
) => {
	const updateDate = openDate.format("YYYY-MM-DD");
	try {
		toast.loading("업데이트 중입니다", {
			toastId: 3,
		});
		await axios.patch(`advent-windows/${windowSeq}`, {
			windowSeq: windowSeq,
			title: title,
			body: body,
			secretKey: secretKey,
			openDate: updateDate,
			contentUrl: contentUrl,
		});
		toast.dismiss(3);
		toast.success("성공적으로 업데이트 했습니다");
	} catch (err) {
		toast.dismiss(3);
		toast.error("업데이트에 실패했습니다");
		throw err;
	}
};

export const deleteCalendarByID = async (
	windowSeq: number,
	secretKey: string,
) => {
	try {
		toast.loading("삭제중입니다", {
			toastId: 4,
		});
		await axios.delete(`advent-windows/${windowSeq}`, {
			data: {
				windowSeq: windowSeq,
				secretKey: secretKey,
			},
		});
		toast.dismiss(4);
		toast.success("성공적으로 삭제했습니다");
	} catch (err) {
		toast.dismiss(4);
		toast.error("삭제에 실패했습니다");
		throw err;
	}
};
