import React, {PropsWithChildren} from 'react';
import {Layout} from '../Layout';
import {Wrapper, ContentWrapper, InfoWrapper, ButtonWrapper, Frame} from './styles';
import {Container} from '../../ui-kit/Container';
import {Typography} from '../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {Button} from '../../ui-kit/Button';
import frameEN from './assets/frame-en.webp';
import frameUA from './assets/frame-ua.webp';
import {useRecoilValue} from 'recoil';
import {languageState} from '../../store/language';
import {Languages} from '../../constants/translate';

//Основна сторінка

export const Main: React.FC<PropsWithChildren> = ({children}) => {
	const {t} = useTranslation();
	const language = useRecoilValue(languageState);
	return (
		<Layout>
			<Wrapper id="main">
				<Container $direction="row">
					<ContentWrapper>
						<InfoWrapper>
							<Typography variant="h1" color="dark">{t('main:info.title')}</Typography>
							<Typography variant="h3" color="gray_1">{t('main:info.description')}</Typography>
							<ButtonWrapper>
								<Button variant="primary" to="/#catalog">{t('main:info.primaryBtn')}</Button>
								<Button variant="secondary" to="/#add">{t('main:info.secondaryBtn')}</Button>
							</ButtonWrapper>
						</InfoWrapper>
						<Frame src={language === Languages.ua ? frameUA : frameEN} alt="banner" />
					</ContentWrapper>
				</Container>
			</Wrapper>
			{children}
		</Layout>
	);
};
