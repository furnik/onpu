import React from 'react';
import {Main} from '../../components/Main';
import {AboutContainer} from '../About';
import {AddContainer} from '../Add';
import {CatalogContainer} from '../Catalog';

//Контейнер для об'єднання всіх блоків основноі сторінки

export const MainContainer: React.FC = () => {
	return (
		<Main>
			<AboutContainer />
			<CatalogContainer />
			<AddContainer/>
		</Main>
	);
};
