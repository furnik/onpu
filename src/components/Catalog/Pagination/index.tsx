import React from 'react';
import {Wrapper, Paginator} from './style';

interface PaginationProps {
	count: number;
	limit: number;
	onPage: (page: number) => void;
}

//Компонент пагінації

export const Pagination: React.FC<PaginationProps> = ({count, onPage, limit}) => {
	const changePageHandler = ({selected}: {selected: number}) => {
		onPage(selected);
	};
	const pages = Math.ceil(count / limit);
	return (
		<Wrapper>
			<Paginator pageRangeDisplayed={1} breakLabel="..." pageCount={pages} onPageChange={changePageHandler} />
		</Wrapper>
	);
};
