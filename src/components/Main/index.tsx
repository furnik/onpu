import React, {PropsWithChildren} from 'react';
import {Layout} from '../Layout';
import {Wrapper, ContentWrapper, InfoWrapper, ButtonWrapper, Frame} from './styles';
import {Container} from '../../ui-kit/Container';
import {Typography} from '../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {Button} from '../../ui-kit/Button';
import frame from './assets/frame.webp';

export const Main: React.FC<PropsWithChildren> = ({children}) => {
	const {t} = useTranslation();
	return (
		<Layout>
			<Wrapper>
				<Container $direction="row">
					<ContentWrapper>
						<InfoWrapper>
							<Typography variant="h1" color="dark">{t('main:info.title')}</Typography>
							<Typography variant="h3" color="gray_1">{t('main:info.description')}</Typography>
							<ButtonWrapper>
								<Button variant="primary">{t('main:info.primaryBtn')}</Button>
								<Button variant="secondary">{t('main:info.secondaryBtn')}</Button>
							</ButtonWrapper>
						</InfoWrapper>
						<Frame src={frame} alt="banner" />
					</ContentWrapper>
				</Container>
			</Wrapper>
			{children}
		</Layout>
	);
};
