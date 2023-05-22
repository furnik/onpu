import React from 'react';
import Form from '../../../components/Add/Form';
import {useProject} from '../../../hooks/project';

//Контейнер для визову хука та передавання данних в компонент форми

const FormContainer: React.FC<{onClose: () => void}> = ({onClose}) => {
	const {error, tags, types, values, specialities, onChange, onItemAdd, onItemRemove, onSubmit, onClear} = useProject();
	return <Form onClear={onClear} error={error} onSubmit={onSubmit} onItemRemove={onItemRemove} onItemAdd={onItemAdd} tags={tags} types={types} values={values} specialities={specialities} onChange={onChange} onClose={onClose} />;
};

export default FormContainer;
