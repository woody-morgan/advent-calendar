import React, { createContext, useContext, useState } from "react";
import { iLanguage } from "../interface/lang";

export const LangConext = createContext({
	lang: "ko",
	toggleLang: (inputLang: iLanguage) => {},
});

interface ILocaleStoreProps {
	children: React.ReactNode;
}

export const useLang = () => useContext(LangConext);

const LocaleStore = ({ children }: ILocaleStoreProps) => {
	const [lang, setLang] = useState("en");

	const toggleLang = (inputLang: iLanguage) => {
		setLang(lang === "ko" ? "en" : "ko");
	};

	return (
		<LangConext.Provider value={{ lang, toggleLang }}>
			{children}
		</LangConext.Provider>
	);
};

export default LocaleStore;
