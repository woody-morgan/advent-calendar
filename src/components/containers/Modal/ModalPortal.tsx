import React from "react";
import ReactDOM from "react-dom";

function ModalPortal({ children }: { children: React.ReactNode }) {
	const modalElement = document.getElementById("modal") as HTMLElement;
	return ReactDOM.createPortal(children, modalElement);
}

export default ModalPortal;
