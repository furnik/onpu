import {DocumentNode, TypedDocumentNode, useMutation, useQuery} from '@apollo/client';
import {useState} from 'react';
import {CommonValueT} from '../types/common';

const initialValue = {en: '', ua: ''};

export interface CommonI {
	getQuery: DocumentNode | TypedDocumentNode;
	createQuery: DocumentNode | TypedDocumentNode;
	updateQuery: DocumentNode | TypedDocumentNode;
	removeQuery: DocumentNode | TypedDocumentNode;
	type: string;
}

//Хук для отримання\редагування\створення та видалення єлементів списку на сторінці адмінісиратора

export const useCommon = ({getQuery, createQuery, updateQuery, removeQuery, type}: CommonI) => {
	const [values, setValues] = useState<CommonValueT>(initialValue);
	const {data, refetch} = useQuery(getQuery);
	const [create] = useMutation(createQuery);
	const [update] = useMutation(updateQuery);
	const [remove] = useMutation(removeQuery);

	const onChange = (field: string) => (value: string) => {
		setValues((prev) => ({...prev, [field]: value}));
	};

	const onCreate = async (callback: () => void) => {
		try {
			const createData = await create({variables: values});
			if (createData) {
				refetch();
				setValues(initialValue);
				callback();
			}
		} catch(err) {
			console.log(err);
		}
	};

	const onUpdate = async (id: string, callback: () => void) => {
		try {
			const updateData = await update({variables: {id, ...values}});
			if (updateData) {
				refetch();
				setValues(initialValue);
				callback();
			}
		} catch(err) {
			console.log(err);
		}
	};

	const onDelete = async (id: string) => {
		try {
			const removeData = await remove({variables: {id}});
			if (removeData) {
				refetch();
			}
		} catch(err) {
			console.log(err);
		}
	};

	return {data: data ? data[type] : [], values, onChange, onCreate, onUpdate, onDelete, setValues};
};
