import React, {useState, lazy, Suspense} from 'react';
import {List, ListItem, ContentWrapper, BlockWrapper} from '../styles';
import {Typography} from '../../../ui-kit/Text';
import {Button} from '../../../ui-kit/Button';
import {UpdateForm} from '../Form/UpdateForm';
import {CommonT} from '../../../types/common';
import {CommonI, useCommon} from '../../../hooks/common';
import {useTranslation} from 'react-i18next';
const AddForm = lazy(() => import('../Form/AddForm'));

//Компонент списку типів, спеціальностей та технологій

export const ListComponent: React.FC<CommonI> = ({getQuery, createQuery, updateQuery, removeQuery, type}) => {
	const {t} = useTranslation();
	const [active, setActive] = useState({create: false, update: false});
	const {data, onDelete, onChange, onCreate, onUpdate, values, setValues} = useCommon({getQuery, createQuery, updateQuery, removeQuery, type});

	//Функція для закриття модального вікна
	const onClose = (field: string) => () => {
		setActive((prev) => ({...prev, [field]: false}));
	};

	//Функція для показу модального вікна
	const onShow = (field: string, data?: CommonT) => () => {
		if (field === 'update' && data) {
			setValues(data);
		}
		setActive((prev) => ({...prev, [field]: true}));
	};

	//Функція обгортка для створення
	const createHandler = () => {
		onCreate(onClose('create'));
	};

	//Функція обгортка для редагування
	const updateHandler = (id: string) => () => {
		onUpdate(id, onClose('update'));
	};

	//Функція обгортка для видалення
	const deleteHandler = (id: string) => () => {
		onDelete(id);
	};

	return (
		<List>
			<Suspense>
				{active.create && <AddForm onSubmit={createHandler} onChange={onChange} onClose={onClose('create')} />}
			</Suspense>
			<Button onClick={onShow('create')} width={140} variant="primary">{t('admin:button.create')}</Button>
			{data?.map((item: CommonT) => (
				<ListItem key={item.id}>
					{active.update && <UpdateForm data={values} onSubmit={updateHandler(item.id)} onChange={onChange} onClose={onClose('update')} />}
					<BlockWrapper>
						<Typography variant="h3" color="dark">EN: {item.en}</Typography>
						<Typography variant="h3" color="dark">UA: {item.ua}</Typography>
					</BlockWrapper>
					<ContentWrapper>
						<Button onClick={onShow('update', item)} width={140} variant="primary">{t('admin:button.update')}</Button>
						<Button onClick={deleteHandler(item.id)} width={140} variant="primary">{t('admin:button.delete')}</Button>
					</ContentWrapper>
				</ListItem>
			))}
		</List>
	);
};
