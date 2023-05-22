import React from 'react';
import {Wrapper, List, NoDataWrapper} from './styles';
import {Container} from '../../ui-kit/Container';
import {Search} from './Search';
import {Card} from './Card';
import {TProject, TSearch} from '../../types/project';
import {useTranslation} from 'react-i18next';
import {Typography} from '../../ui-kit/Text';
import {useRecoilValue} from 'recoil';
import {languageState} from '../../store/language';
import {Languages} from '../../constants/translate';
import {Pagination} from './Pagination';

interface CatalogProps {
	pagination: {
		limit: number;
		skip: number;
	}
	count: number;
	years: Array<string>;
	projects: Array<TProject>;
	onSearch: (value: string) => void;
	onYear: (year: string) => void;
	onChange: (field: 'type' | 'speciality') => (value: string) => void;
	types: Array<string>;
	specialities: Array<string>;
	data: TSearch;
	onClear: () => void;
	onPage: (page: number) => void;
}

//Компонент блоку каталогу проєктів

export const Catalog: React.FC<CatalogProps> = ({data, count, years, projects, onSearch, types, onChange, specialities, onClear, onYear, onPage, pagination}) => {
	const {t} = useTranslation();
	const language = useRecoilValue(languageState);
	return (
		<Container $direction="row">
			<Wrapper id="catalog">
				<Search count={count} onYear={onYear} years={years} onClear={onClear} specialities={specialities} data={data} types={types} onSearch={onSearch} onChange={onChange}>
					{projects.length > 0 ? (
						<List>
							{projects.map((item) => (
								<Card key={item.id} {...item} />
							))}
							{count > pagination.limit && <Pagination count={count} limit={pagination.limit} onPage={onPage} />}
						</List>
					) : (
						<NoDataWrapper $ua={language === Languages.ua}>
							<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="48" height="48" rx="24" fill="#EBEFFF"/>
								<path d="M33 33L28.65 28.65M31 23C31 27.4183 27.4183 31 23 31C18.5817 31 15 27.4183 15 23C15 18.5817 18.5817 15 23 15C27.4183 15 31 18.5817 31 23Z" stroke="#175CD3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<Typography variant="h5" weight="medium" color="dark">{t('catalog:nodata.title')}</Typography>
							<Typography textAlign="center" variant="h6" color="gray_1">{t('catalog:nodata.description')}</Typography>
						</NoDataWrapper>
					)}
				</Search>
			</Wrapper>
		</Container>
	);
};
