import React, {useState} from 'react';
import {Container} from '../../ui-kit/Container';
import {Wrapper, InfoWrapper} from './styles';
import {Typography} from '../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {Button} from '../../ui-kit/Button';
import FormContainer from '../../containers/Add/Form';

//Компонент блоку "Додати проєкт"

export const Add: React.FC = () => {
	const {t} = useTranslation();
	const [active, setActive] = useState(false);

	//Функція для зміни статусу відображення форми
	const changeActiveHandler = () => {
		setActive(!active);
	};

	return (
		<Container $direction="row">
			{active && (
				<FormContainer onClose={changeActiveHandler} />
			)}
			<Wrapper id="add">
				<InfoWrapper>
					<Typography variant="h2" sizeT={24} sizeD={30} weight="semi-bold" color="dark">{t('add:title')}</Typography>
					<Typography variant="h3" sizeT={18} color="gray_1">{t('add:description')}</Typography>
				</InfoWrapper>
				<Button width={200} variant="primary" onClick={changeActiveHandler}>{t('add:button')}</Button>
			</Wrapper>
		</Container>
	);
};
