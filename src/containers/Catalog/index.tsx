import React from 'react';
import {Catalog} from '../../components/Catalog';
import {useGetProjects} from '../../hooks/project';

//Контейнер для визову хука та передавання даних в компонент каталогу

export const CatalogContainer: React.FC = () => {
	const {data, years, count, types, projects, specialities, pagination, onSearch, onChange, onClear, onYear, onPage} = useGetProjects();
	return <Catalog pagination={pagination} onPage={onPage} count={count} onYear={onYear} years={years} onClear={onClear} specialities={specialities} data={data} types={types} projects={projects} onSearch={onSearch} onChange={onChange} />;
};
