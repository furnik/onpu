import React from 'react';
import {Wrapper, Title, ContentWrapper, InfoWrapper, InfoBanner, InfoBlock, InfoReverse, InfoLink} from './styles';
import {Container} from '../../ui-kit/Container';
import {useTranslation} from 'react-i18next';
import {Typography} from '../../ui-kit/Text';
import banner from './assets/banner.webp';

//Інформація блоку "Про нас", винесена для легшого редагування

const blocks = [
	{
		title: 'about:info.universityTitle',
		description: 'about:info.universityDescription',
		link: {
			content: 'about:info.more',
			url: 'https://ontu.edu.ua/chair',
		}
	},
	{
		title: 'about:info.developTitle',
		description: 'about:info.developDescription'
	},
	{
		title: 'about:info.missionTitle',
		description: 'about:info.missionDescription'
	},
];

//Компонент блоку "Про нас"

export const About: React.FC = () => {
	const {t} = useTranslation();
	return (
		<Container $direction="row">
			<Wrapper id="about">
				<Typography variant="h5" weight="semi-bold" color="blue_1">{t('about:mainInfo.ontu')}</Typography>
				<Title variant="h2" weight="semi-bold" color="dark">{t('about:mainInfo.title')}</Title>
				<Typography variant="h4" color="gray_1">{t('about:mainInfo.description')}</Typography>
				<ContentWrapper>
					<InfoWrapper>
						<InfoReverse>
							{blocks.map((item, index) => (
								<InfoBlock $active={index === 0} key={index}>
									<Typography variant="h4" weight="medium" color="dark">{t(item.title)}</Typography>
									<Typography variant="h5" color="gray_1">{t(item.description)}</Typography>
									{item.link && <InfoLink href={item.link.url}>{t(item.link.content)}</InfoLink>}
								</InfoBlock>
							))}
						</InfoReverse>
					</InfoWrapper>
					<InfoBanner src={banner} alt="banner" />
				</ContentWrapper>
			</Wrapper>
		</Container>
	);
};
