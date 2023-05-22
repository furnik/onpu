import React from 'react';
import {Wrapper, ContentWrapper, InfoWrapper, LinkWrapper, ColumnWrapper, LinkText, CopyrightWrapper} from './styles';
import {Container} from '../../../ui-kit/Container';
import {Typography} from '../../../ui-kit/Text';
import {useTranslation} from 'react-i18next';

//Основна інформація с блоку "Контактів"

const links = [
	[
		{text: 'footer:links.about', link: 'https://ontu.edu.ua/chair'},
		{text: 'footer:links.program', link: 'https://ontu.edu.ua/chair'},
		{text: 'footer:links.admission', link: 'https://ontu.edu.ua/chair'}
	],
	[
		{text: 'footer:links.facebook', link: 'https://www.facebook.com/BibliONTU'},
		{text: 'footer:links.telegram', link: 'https://t.me/LibONTU'},
		{text: 'footer:links.lib', link: 'https://t.me/ISSN_Bot'},
		{text: 'footer:links.youtube', link: 'https://www.youtube.com/c/Need2KnowONTU'}
	],
	[
		{text: 'footer:links.ntb', link: 'https://library.ontu.edu.ua/'},
		{text: 'footer:links.ksi', link: 'https://kci.ontu.edu.ua/'},
		{text: 'footer:links.ontu', link: 'https://www.ontu.edu.ua/'},
		{text: 'footer:links.mon', link: 'https://mon.gov.ua/ua'}
	]
];

const year = new Date().getFullYear();

//Компонент блоку "Контаків"

export const Footer: React.FC = () => {
	const {t} = useTranslation();
	return (
		<Wrapper id="footer">
			<Container $direction="column">
				<ContentWrapper>
					<InfoWrapper>
						<ColumnWrapper>
							<Typography variant="h5" weight="medium" color="white">{t('footer:info.title')}</Typography>
							<Typography variant="h5" weight="regular" color="white">{t('footer:info.address')}</Typography>
						</ColumnWrapper>
						<ColumnWrapper>
							<Typography variant="h5" weight="regular" color="white">{t('footer:info.support')}</Typography>
							<Typography variant="h5" weight="regular" color="white" decoration="underline">{t('footer:info.email')}</Typography>
							<Typography variant="h5" weight="regular" color="white">{t('footer:info.phone')}</Typography>
						</ColumnWrapper>
					</InfoWrapper>
					<LinkWrapper>
						{links.map((items, index) => (
							<ColumnWrapper key={index}>
								{items.map((item) => (
									<LinkText target="_blank" key={item.text} href={item.link}>{t(item.text)}</LinkText>
								))}
							</ColumnWrapper>
						))}
					</LinkWrapper>
				</ContentWrapper>
				<CopyrightWrapper>
					<Typography variant="h6" weight="regular" color="white">Copyright © 1998-{year} by ONTU. {t('footer:copyright')}</Typography>
					<Typography sizeD={12} weight="regular" color="gray_7">{t('footer:created')}</Typography>
				</CopyrightWrapper>
			</Container>
		</Wrapper>
	);
};
