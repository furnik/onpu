import React from 'react';
import {CardWrapper, RowWrapper, FooterWrapper, Link} from './styles';
import {TProject} from '../../../types/project';
import {Typography} from '../../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {Label} from '../../../ui-kit/Label';
import {useRecoilValue} from 'recoil';
import {languageState} from '../../../store/language';
import {Languages} from '../../../constants/translate';

//Компонент картки проєкту

export const Card: React.FC<TProject> = (project) => {
	const {t} = useTranslation();
	const language = useRecoilValue(languageState);
	const {title, description, specialities, link, year, managers, types, tags, authors} = language === Languages.ua ? project.ua : project.en;
	const siteName = new URL(link).host;
	return (
		<CardWrapper>
			<RowWrapper gap={10}>
				{specialities.map((speciality) => <Typography key={speciality} variant="h6" color="gray_1">{speciality}</Typography>)}
			</RowWrapper>
			<Typography variant="h4" weight="medium" color="dark">{title}</Typography>
			<Typography variant="h5" color="gray_1">{description}</Typography>
			<RowWrapper gap={5}>
				<Typography variant="h5" weight="medium" color="black">{t('catalog:card.author')}:</Typography>
				<Typography variant="h5" color="black">{authors.join(', ')}</Typography>
			</RowWrapper>
			<RowWrapper gap={5}>
				<Typography variant="h5" weight="medium" color="black">{t('catalog:card.manager')}:</Typography>
				<Typography variant="h5" color="black">{managers.join(', ')}</Typography>
			</RowWrapper>
			<RowWrapper gap={5}>
				<Typography variant="h5" weight="medium" color="black">{t('catalog:card.type')}:</Typography>
				<Typography variant="h6" color="black">{types.join(', ')}</Typography>
			</RowWrapper>
			<RowWrapper gap={10}>
				{tags.map((tag) => <Label key={tag} content={tag} />)}
			</RowWrapper>
			<FooterWrapper>
				<Link target="_blank" href={link}>{siteName}</Link>
				<Typography variant="h5" color="gray_1">{t('catalog:card.year')} {year}</Typography>
			</FooterWrapper>
		</CardWrapper>
	);
};
