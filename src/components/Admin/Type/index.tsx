import React from 'react';
import {CreateTypeQuery, DeleteTypeQuery, GetTypeQuery, UpdateTypeQuery} from '../../../queries/type';
import {ListComponent} from '../List';

//Компонент для виводу списку типів додатку

export const Type: React.FC = () => {
	return <ListComponent type="getTypes" getQuery={GetTypeQuery} createQuery={CreateTypeQuery} updateQuery={UpdateTypeQuery} removeQuery={DeleteTypeQuery} />;
};
