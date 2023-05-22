import React from 'react';
import {Input} from '../../../ui-kit/Input';
import {Form} from './index';
import {Button} from '../../../ui-kit/Button';
import {useTranslation} from 'react-i18next';

interface FormProps {
  onClose: () => void;
	onChange: (field: string) => (value: string) => void;
	onSubmit: () => void;
}

//Компонент форми створення типів, спеціальностей та технологій

const AddForm: React.FC<FormProps> = ({onClose, onChange, onSubmit}) => {
	const {t} = useTranslation();
	return (
		<Form onClose={onClose}>
			<Input placeholder="en" onChange={onChange('en')} />
			<Input placeholder="ua" onChange={onChange('ua')} />
			<Button onClick={onSubmit} variant="primary">{t('admin:button.submit')}</Button>
		</Form>
	);
};

export default AddForm;
