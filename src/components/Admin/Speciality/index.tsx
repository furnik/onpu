import React from 'react';
import {ListComponent} from '../List';
import {GetSpecialityQuery, UpdateSpecialityQuery, DeleteSpecialityQuery, CreateSpecialityQuery} from '../../../queries/speciality';

//Компонент для виводу списку спеціальностей

export const Speciality: React.FC = () => {
	return <ListComponent type="getSpecialities" getQuery={GetSpecialityQuery} createQuery={CreateSpecialityQuery} removeQuery={DeleteSpecialityQuery} updateQuery={UpdateSpecialityQuery} />;
};
