import React, {PropsWithChildren} from 'react';
import {SearchWrapper, ResultText, ContentWrapper, TabletSearchWrapper, ResultBlock} from './styles';
import {Typography} from '../../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {SearchInput} from '../../../ui-kit/Input/Search';
import {Select} from '../../../ui-kit/Select';
import {Filter} from '../Filter';
import {TSearch} from '../../../types/project';

interface SearchProps {
	years: Array<string>;
	onSearch: (value: string) => void;
	onChange: (field: 'type' | 'speciality') => (value: string) => void;
	types: Array<string>;
	data: TSearch;
	specialities: Array<string>;
	onClear: () => void;
	onYear: (year: string) => void;
	count: number;
}

//Компонент блоку пошуку проєктів

export const Search: React.FC<PropsWithChildren<SearchProps>> = ({children, years, data, onSearch, types, onChange, specialities, onClear, onYear, count}) => {
	const {t} = useTranslation();
	const result = t('catalog:result').replace('{{number}}', String(count));
	return (
		<>
			<Typography variant="h2" sizeT={24} weight="semi-bold" color="dark">{t('catalog:title')}</Typography>
			<TabletSearchWrapper>
				<Filter onYear={onYear} years={years} onClear={onClear} data={data} onChange={onChange} specialities={specialities} />
				<ResultBlock>
					<Select placeholder={t('catalog:type')} onChange={onChange('type')} values={types} defaultValues={data.type} />
					<ResultText variant="h6" weight="medium" color="dark">{result}</ResultText>
				</ResultBlock>
			</TabletSearchWrapper>
			<SearchWrapper>
				<ResultText variant="h6" weight="medium" color="dark">{result}</ResultText>
				<SearchInput placeholder={t('catalog:search')} onChange={onSearch} />
				<Select placeholder={t('catalog:type')} onChange={onChange('type')} values={types} defaultValues={data.type} />
			</SearchWrapper>
			<ContentWrapper>
				<Filter onYear={onYear} years={years} onClear={onClear} data={data} onChange={onChange} specialities={specialities} />
				{children}
			</ContentWrapper>
		</>
	);
};
