import React from 'react';
import Form from '../../../Add/Form';
import {useProject} from '../../../../hooks/project';
import {TProject} from '../../../../types/project';
import {ApolloQueryResult} from '@apollo/client';

interface FormProps {
	data: TProject;
	onClose: () => void;
	refetch: () => Promise<ApolloQueryResult<unknown>>;
}

//Контейнер для визову хука та передавання данних в компонент форми

const ProjectForm: React.FC<FormProps> = ({data, onClose, refetch}) => {
	const {error, tags, types, values, specialities, onChange, onItemAdd, onItemRemove, onSubmit, onClear} = useProject(data, refetch);
	return <Form onClear={onClear} error={error} onSubmit={onSubmit} onItemRemove={onItemRemove} onItemAdd={onItemAdd} tags={tags} types={types} values={values} specialities={specialities} onChange={onChange} onClose={onClose} />;
};

export default ProjectForm;
