import React, {lazy, Suspense} from 'react';
import {useRecoilValue} from 'recoil';
import {userState} from '../../store/user';
import {AuthContainer} from './Auth';

const Admin = lazy(() => import('../../components/Admin'));

//Контейнер для відображення сторіки адміністратора або форми авторизації залежно від наявності данних користувача

export const AdminContainer: React.FC = () => {
	const user = useRecoilValue(userState);
	if (!user.id) {
		return <AuthContainer />;
	}
	return <Suspense><Admin /></Suspense>;
};
