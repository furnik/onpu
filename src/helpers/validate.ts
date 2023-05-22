import {Project, TProjectError} from '../types/project';
import {Dispatch, SetStateAction} from 'react';
import {FormFields} from '../constants/project';
import {TLogin} from '../types/user';

//Функції перевірки валідації вводимих даних

const moreThreeSymbols = (text?: string) => {
	return text && text.length > 3;
};

const isUrl = (link?: string) => {
	return link && link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g);
};

const isEmptyArray = (array: Array<string>) => {
	return array.length < 1;
};

const isEmptyCreator = (array: Array<string>) => {
	return !!array.filter((item) => item.length < 3).length;
};

export const getProjectValidate = (project: Project, setError: Dispatch<SetStateAction<TProjectError>>) => {
	let error = {} as TProjectError;
	if (!moreThreeSymbols(project.en.title) || !moreThreeSymbols(project.ua.title)) {
		error = {...error, [FormFields.title]: 'add:error.input'};
	}
	if (!moreThreeSymbols(project.en.description) || !moreThreeSymbols(project.ua.description)) {
		error = {...error, [FormFields.description]: 'add:error.input'};
	}
	if (!isUrl(project.en.link) || !isUrl(project.ua.link)) {
		error = {...error, [FormFields.link]: 'add:error.input'};
	}
	if (!moreThreeSymbols(project.en.year) || !moreThreeSymbols(project.ua.year)) {
		error = {...error, [FormFields.year]: 'add:error.input'};
	}
	if (isEmptyArray(project.en.tags) || isEmptyArray(project.ua.tags)) {
		error = {...error, [FormFields.tags]: 'add:error.select'};
	}
	if (isEmptyArray(project.en.types) || isEmptyArray(project.ua.types)) {
		error = {...error, [FormFields.types]: 'add:error.select'};
	}
	if (isEmptyArray(project.en.specialities) || isEmptyArray(project.ua.specialities)) {
		error = {...error, [FormFields.specialities]: 'add:error.select'};
	}
	if (isEmptyCreator(project.en.authors) || isEmptyCreator(project.ua.authors)) {
		error = {...error, [FormFields.authors]: 'add:error.input'};
	}
	if (isEmptyCreator(project.en.managers) || isEmptyCreator(project.ua.managers)) {
		error = {...error, [FormFields.managers]: 'add:error.input'};
	}
	setError(error);
	return error;
};

export const getLoginValidate = (login: TLogin, setError: Dispatch<SetStateAction<TLogin>>) => {
	let error = {} as TLogin;
	if (!moreThreeSymbols(login.username)) {
		error = {...error, username: 'admin:error'};
	}
	if (!moreThreeSymbols(login.password)) {
		error = {...error, password: 'admin:error'};
	}
	setError(error);
	return error;
};

export const getUpdateUserValidate = (login: TLogin, setError: Dispatch<SetStateAction<TLogin>>) => {
	let error = {} as TLogin;
	if (!moreThreeSymbols(login.username)) {
		error = {...error, username: 'admin:error'};
	}
	if (!moreThreeSymbols(login.currentPassword)) {
		error = {...error, currentPassword: 'admin:error'};
	}
	if (!moreThreeSymbols(login.newPassword)) {
		error = {...error, newPassword: 'admin:error'};
	}
	if (!moreThreeSymbols(login.repeatPassword)) {
		error = {...error, repeatPassword: 'admin:error'};
	}
	if (login.repeatPassword !== login.newPassword) {
		error = {...error, newPassword: 'admin:error', repeatPassword: 'admin:error'};
	}
	setError(error);
	return error;
};

