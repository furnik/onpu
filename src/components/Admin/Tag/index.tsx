import React from 'react';
import {ListComponent} from '../List';
import {GetTagQuery, UpdateTagQuery, CreateTagQuery, DeleteTagQuery} from '../../../queries/tag';

//Компонент для виводу списку технологій

export const Tag: React.FC = () => {
	return <ListComponent getQuery={GetTagQuery} createQuery={CreateTagQuery} updateQuery={UpdateTagQuery} removeQuery={DeleteTagQuery} type={'getTags'} />;
};
