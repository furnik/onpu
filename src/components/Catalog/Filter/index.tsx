import React, {useState} from 'react';
import {FilterWrapper, GhostButton, LabelBlock, Line, Row, SpecialtyItem, SpecialtyList, Wrapper, Button} from './styles';
import {Typography} from '../../../ui-kit/Text';
import {DefaultSelect} from '../../../ui-kit/Select/Default';
import {Checkbox} from '../../../ui-kit/Checkbox';
import {useTranslation} from 'react-i18next';

const list = ['501 Економіка', '071 Облік і оподаткування', '073 Менеджмеент', '075 Маркетинг', '076 Підприємництво, торгівля та боржова діяльність', '101 Екологія', '501 Економіка', '071 Облік і оподаткування', '073 Менеджмеент', '075 Маркетинг', '076 Підприємництво, торгівля та боржова діяльність', '101 Екологія'];

export const Filter: React.FC = () => {
	const {t} = useTranslation();
	const [active, setActive] = useState(false);

	const changeStatusHandler = () => {
		setActive(!active);
	};

	const onCloseHandler = () => {
		setActive(false);
	};

	return (
		<Wrapper>
			<Button onClick={changeStatusHandler}>{t('catalog:specialty')}</Button>
			<FilterWrapper active={active}>
				<Row>
					<GhostButton onClick={onCloseHandler}>
						<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.87402 1.92822L4.3484 7.75354L9.87402 13.0604" stroke="#9BA3B1" strokeWidth="1.5"/>
						</svg>
						<Typography variant="h5" weight="medium" color="dark_2">{t('catalog:specialty')}(2)</Typography>
					</GhostButton>
					<GhostButton>{t('catalog:clear')}</GhostButton>
				</Row>
				<Line top={-10} />
				<DefaultSelect placeholder={t('catalog:year')} onChange={() => console.log('ok')} values={['2020', '2021', '2022']} />
				<Line />
				<SpecialtyList>
					{list.map((item) => <SpecialtyItem key={item}>
						<LabelBlock>
							<Checkbox onChange={() => console.log('ok')} value={false} />
							<Typography variant="h5" weight="medium" color="dark_2">{item}</Typography>
						</LabelBlock>
						<Line top={20} />
					</SpecialtyItem>)}
				</SpecialtyList>
			</FilterWrapper>
		</Wrapper>
	);
};
