import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { kr, en } from "@src/locales";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: { kr, en },
		fallbackLng: ["kr", "en"],
		interpolation: { escapeValue: false },
		detection: { order: ["path", "navigator"] },
	});

export default i18n;
