import React, {PropsWithChildren} from 'react';
import {SearchWrapper, ResultText, ContentWrapper, TabletSearchWrapper, ResultBlock} from './styles';
import {Typography} from '../../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {SearchInput} from '../../../ui-kit/Input/Search';
import {Select} from '../../../ui-kit/Select';
import {Filter} from '../Filter';

export const Search: React.FC<PropsWithChildren> = ({children}) => {
	const {t} = useTranslation();
	const result = t('catalog:result').replace('{{number}}', '28');
	return (
		<>
			<Typography variant="h2" sizeT={24} weight="semi-bold" color="dark">{t('catalog:title')}</Typography>
			<TabletSearchWrapper>
				<Filter />
				<ResultBlock>
					<Select placeholder={t('catalog:type')} onChange={() => console.log('ok')} values={[]} />
					<ResultText variant="h6" weight="medium" color="dark">{result}</ResultText>
				</ResultBlock>
			</TabletSearchWrapper>
			<SearchWrapper>
				<ResultText variant="h6" weight="medium" color="dark">{result}</ResultText>
				<SearchInput placeholder={t('catalog:search')} onChange={() => console.log('ok')} />
				<Select placeholder={t('catalog:type')} onChange={() => console.log('ok')} values={[]} />
			</SearchWrapper>
			<ContentWrapper>
				<Filter />
				{children}
			</ContentWrapper>
		</>
	);
};
