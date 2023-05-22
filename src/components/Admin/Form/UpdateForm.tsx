import React from 'react';
import {Input} from '../../../ui-kit/Input';
import {Form} from './index';
import {Button} from '../../../ui-kit/Button';
import {useTranslation} from 'react-i18next';

interface FormProps {
  onClose: () => void;
  onChange: (field: string) => (value: string) => void;
  onSubmit: () => void;
	data: {en: string; ua: string};
}

//Компонент форми редагування типів, спеціальностей та технологій

export const UpdateForm: React.FC<FormProps> = ({onClose, onChange, onSubmit, data}) => {
	const {t} = useTranslation();
	return (
		<Form onClose={onClose}>
			<Input value={data.en} placeholder="en" onChange={onChange('en')} />
			<Input value={data.ua} placeholder="ua" onChange={onChange('ua')} />
			<Button onClick={onSubmit} variant="primary">{t('admin:button.submit')}</Button>
		</Form>
	);
};
