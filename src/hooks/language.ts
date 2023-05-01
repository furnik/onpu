import {useRecoilState} from 'recoil';
import {languageState} from '../store/language';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

const defaultValue = 'header:switcher.ua';
const key = 'language';

export const useLanguage = () => {
	const {t} = useTranslation();
	const [language, setLang] = useRecoilState(languageState);

	const changeLanguageHandler = (value: string) => () => {
		setLang(value);
	};

	const getLanguage = () => {
		const value = localStorage.getItem(key);
		if (value) {
			setLang(value);
		}
		if (!value && !language) {
			localStorage.setItem(key, t(defaultValue));
			setLang(String(t(defaultValue)));
		}
	};

	const setLanguage = () => {
		const value = localStorage.getItem(key);
		if (value && language && value !== language) {
			localStorage.setItem(key, language);
		}
	};

	useEffect(() => {
		getLanguage();
	}, []);

	useEffect(() => {
		setLanguage();
	}, [language]);

	return {language, changeLanguageHandler};
};
