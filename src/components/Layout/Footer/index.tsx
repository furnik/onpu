import React from 'react';
import {Wrapper, ContentWrapper, InfoWrapper, LinkWrapper, ColumnWrapper, LinkText, CopyrightWrapper} from './styles';
import {Container} from '../../../ui-kit/Container';
import {Typography} from '../../../ui-kit/Text';
import {useTranslation} from 'react-i18next';

const links = [
	[
		{text: 'footer:links.about', link: ''},
		{text: 'footer:links.program', link: ''},
		{text: 'footer:links.admission', link: ''}
	],
	[
		{text: 'footer:links.facebook', link: ''},
		{text: 'footer:links.telegram', link: ''},
		{text: 'footer:links.lib', link: ''},
		{text: 'footer:links.youtube', link: ''}
	],
	[
		{text: 'footer:links.ntb', link: ''},
		{text: 'footer:links.ksi', link: ''},
		{text: 'footer:links.ontu', link: ''},
		{text: 'footer:links.mon', link: ''}
	]
];

const year = new Date().getFullYear();

export const Footer: React.FC = () => {
	const {t} = useTranslation();
	return (
		<Wrapper>
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
