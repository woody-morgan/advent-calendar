export interface CalendarItemShape {
	body: string | null;
	editedDateTime: string;
	// 조회수
	inquiryCount: number;
	// 작성자
	name: string;
	// 열리는 날짜(유효성 보장)
	openDate: string | null;
	// 등록 날짜
	regDateTime: string;
	// 수정때 필요한 비밀번호
	secretKey: string | null;
	title: string | null;
	// post할때 쓰는 PK
	windowSeq: number;
	// image url
	iconImgUrl: string | null;
	// url for outside blog
	contentUrl: string | null;
}

export interface CalendarPostForm {
	name: string;
	title: string;
	body: string;
	openDate: Date;
}

export interface CalendarPatchForm {
	windowSeq: number;
	title: string;
	body: string;
	secretKey: string;
	openDate: Date;
}

export interface CalendarDeleteForm {
	windowSeq: number;
	secretKey: string;
}
