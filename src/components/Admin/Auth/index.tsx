import React, {useState} from 'react';
import {Input} from '../../../ui-kit/Input';
import {Button} from '../../../ui-kit/Button';
import {useTranslation} from 'react-i18next';
import {FormWrapper, ButtonWrapper, GhostButton} from './styled';
import {TLogin} from '../../../types/user';

interface FormProps {
  onChange: (field: string) => (value: string) => void;
  onLogin: () => void;
  onUpdate: () => void;
	values: TLogin;
	error: TLogin;
}

//Компонент форми авторизації

export const Auth: React.FC<FormProps> = ({onChange, onLogin, values, error, onUpdate}) => {
	const [type, setType] = useState('login');
	const {t} = useTranslation();

	//Функція для зміни типу форми
	const changeTypeHandler = () => {
		setType(type === 'login' ? 'change' : 'login');
	};

	//Функція відправки запиту на сервер
	const submitHandler = () => {
		if (type === 'login') {
			onLogin();
		}
		if (type === 'change') {
			onUpdate();
		}
	};

	return (
		<FormWrapper>
			{type === 'login' ? (
				<>
					<Input error={error.username} value={values.username} placeholder={t('admin:auth.username')} onChange={onChange('username')} />
					<Input error={error.password} value={values.password} placeholder={t('admin:auth.password')} onChange={onChange('password')} />
				</>
			) : (
				<>
					<Input error={error.username} value={values.username} placeholder={t('admin:auth.username')} onChange={onChange('username')} />
					<Input error={error.currentPassword} value={values.currentPassword} placeholder={t('admin:auth.currentPassword')} onChange={onChange('currentPassword')} />
					<Input error={error.newPassword} value={values.newPassword} placeholder={t('admin:auth.newPassword')} onChange={onChange('newPassword')} />
					<Input error={error.repeatPassword} value={values.repeatPassword} placeholder={t('admin:auth.repeatPassword')} onChange={onChange('repeatPassword')} />
				</>
			)}
			<ButtonWrapper>
				<Button onClick={submitHandler} variant="primary">{t(type === 'login' ? 'admin:auth.login' : 'admin:auth.change')}</Button>
				<GhostButton onClick={changeTypeHandler}>{t(type === 'login' ? 'admin:auth.change' : 'admin:auth.login')}</GhostButton>
			</ButtonWrapper>
		</FormWrapper>
	);
};
