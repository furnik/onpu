import React from 'react';
import {Wrapper, Line, Button} from './styles';
import {useLanguage} from '../../../../hooks/language';
import {useTranslation} from 'react-i18next';

enum Languages {
	ua = 'header:switcher.ua',
	en = 'header:switcher.en',
}

export const Switcher: React.FC = () => {
	const {t} = useTranslation();
	const {language, changeLanguageHandler} = useLanguage();
	return (
		<Wrapper>
			<Button onClick={changeLanguageHandler(t(Languages.ua))} $active={language === t(Languages.ua)}>{t(Languages.ua)}</Button>
			<Line />
			<Button onClick={changeLanguageHandler(t(Languages.en))} $active={language === t(Languages.en)}>{t(Languages.en)}</Button>
		</Wrapper>
	);
};
