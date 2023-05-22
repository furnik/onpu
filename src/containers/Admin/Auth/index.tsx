import React from 'react';
import {Auth} from '../../../components/Admin/Auth';
import {useLogin} from '../../../hooks/user';

//Контейнер для визову хука та передавання данних в компонент авторизації

export const AuthContainer = () => {
	const {error, values, onChange, onLogin, onUpdate} = useLogin();
	return <Auth error={error} values={values} onChange={onChange} onLogin={onLogin} onUpdate={onUpdate} />;
};
