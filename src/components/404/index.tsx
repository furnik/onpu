import React from 'react';
import {Layout} from '../Layout';
import {Container} from '../../ui-kit/Container';
import {Wrapper, Image, InfoWrapper, ContentWrapper} from './styles';
import frame from './assets/Illustration.png';
import {Typography} from '../../ui-kit/Text';
import {useTranslation} from 'react-i18next';

export const Error404: React.FC = () => {
	const {t} = useTranslation();
	return (
		<Layout>
			<Wrapper>
				<Container $direction="row">
					<ContentWrapper>
						<InfoWrapper>
							<Typography variant="h5" weight="semi-bold" color="blue_6">{t('error:error')}</Typography>
							<Typography variant="h1" sizeT={36} weight="semi-bold" color="dark">{t('error:title')}</Typography>
							<Typography variant="h3" color="gray_1">{t('error:description')}</Typography>
						</InfoWrapper>
						<Image src={frame} alt="frame" />
					</ContentWrapper>
				</Container>
			</Wrapper>
		</Layout>
	);
};
