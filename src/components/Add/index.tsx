import React, {useState, lazy, Suspense} from 'react';
import {Container} from '../../ui-kit/Container';
import {Wrapper, InfoWrapper} from './styles';
import {Typography} from '../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {Button} from '../../ui-kit/Button';
const Form = lazy(() => import('./Form'));

export const Add: React.FC = () => {
	const {t} = useTranslation();
	const [active, setActive] = useState(false);

	const changeActiveHandler = () => {
		setActive(!active);
	};

	return (
		<Container $direction="row">
			{active && (
				<Suspense>
					<Form onClose={changeActiveHandler} />
				</Suspense>
			)}
			<Wrapper>
				<InfoWrapper>
					<Typography variant="h2" sizeT={24} sizeD={30} weight="semi-bold" color="dark">{t('add:title')}</Typography>
					<Typography variant="h3" sizeT={18} color="gray_1">{t('add:description')}</Typography>
				</InfoWrapper>
				<Button width={200} variant="primary" onClick={changeActiveHandler}>{t('add:button')}</Button>
			</Wrapper>
		</Container>
	);
};
