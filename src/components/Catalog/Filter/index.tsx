import React, {useState} from 'react';
import {FilterWrapper, GhostButton, LabelBlock, Line, Row, SpecialityItem, SpecialityList, Wrapper, Button} from './styles';
import {Typography} from '../../../ui-kit/Text';
import {DefaultSelect} from '../../../ui-kit/Select/Default';
import {Checkbox} from '../../../ui-kit/Checkbox';
import {useTranslation} from 'react-i18next';
import {TSearch} from '../../../types/project';

interface FilterProps {
	years: Array<string>;
	specialities: Array<string>;
	onChange: (field: 'type' | 'speciality') => (value: string) => void;
	data: TSearch;
	onClear: () => void;
	onYear: (year: string) => void;
}

//Компонент Фільтру каталогу

export const Filter: React.FC<FilterProps> = ({specialities, onChange, data, onClear, years, onYear}) => {
	const {t} = useTranslation();
	const [active, setActive] = useState(false);

	//Функція для показу модального вікна
	const changeStatusHandler = () => {
		setActive(!active);
	};

	//Функція для закриття модального вікна
	const onCloseHandler = () => {
		setActive(false);
	};

	//Функція для зміни данних вводу
	const changeValue = (value: string) => () => {
		onChange('speciality')(value);
	};

	return (
		<Wrapper>
			<Button onClick={changeStatusHandler}>{t('catalog:speciality')}</Button>
			<FilterWrapper active={active}>
				<Row>
					<GhostButton onClick={onCloseHandler}>
						<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.87402 1.92822L4.3484 7.75354L9.87402 13.0604" stroke="#9BA3B1" strokeWidth="1.5"/>
						</svg>
						<Typography variant="h5" weight="medium" color="dark_2">{t('catalog:speciality')}({data.speciality.length})</Typography>
					</GhostButton>
					<GhostButton onClick={onClear}>{t('catalog:clear')}</GhostButton>
				</Row>
				<Line top={-10} />
				<DefaultSelect placeholder={t('catalog:year')} onChange={onYear} values={years} defaultValue={data.year} />
				<Line />
				<SpecialityList>
					{specialities.map((item) => <SpecialityItem key={item}>
						<LabelBlock>
							<Checkbox onChange={changeValue(item)} value={data.speciality.includes(item)} />
							<Typography variant="h5" weight="medium" color="dark_2">{item}</Typography>
						</LabelBlock>
						<Line top={20} />
					</SpecialityItem>)}
				</SpecialityList>
			</FilterWrapper>
		</Wrapper>
	);
};
