import {useState} from 'react';
import {TLogin} from '../types/user';
import {useMutation} from '@apollo/client';
import {LoginQuery, UpdateUserQuery} from '../queries/user';
import {useRecoilState} from 'recoil';
import {userState} from '../store/user';
import {getLoginValidate, getUpdateUserValidate} from '../helpers/validate';

const initialValue = {
	username: '',
	password: '',
	currentPassword: '',
	newPassword: '',
	repeatPassword: '',
};

//Хук для авторизації та редагування користувача

export const useLogin = () => {
	const [values, setValues] = useState<TLogin>(initialValue);
	const [error, setError] = useState<TLogin>(initialValue);
	const [login] = useMutation(LoginQuery);
	const [update] = useMutation(UpdateUserQuery);
	const [, setUser] = useRecoilState(userState);

	const onChange = (field: string) => (value:string) => {
		return setValues((prev) => ({...prev, [field]: value}));
	};

	const onLogin = async () => {
		try {
			const errors = getLoginValidate(values, setError);
			if (Object.values(errors).length) {
				return;
			}
			const {data} = await login({variables: {input: {username: values.username, password: values.password}}});
			if (data?.login.id) {
				setUser(data.login);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const onUpdate = async () => {
		try {
			const errors = getUpdateUserValidate(values, setError);
			if (Object.values(errors).length) {
				return;
			}
			const {data} = await update({variables: {input: {username: values.username, password: values.currentPassword, newPassword: values.newPassword}}});
			if (data?.updateUser.id) {
				setUser(data.updateUser);
			}
		} catch (err) {
			console.log(err);
		}
	};
	return {error, values, onLogin, onChange, onUpdate};
};
