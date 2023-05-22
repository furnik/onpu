import React, {useEffect} from 'react';
import {Route, Routes as Switch, useLocation} from 'react-router-dom';
import {route} from '../constants/route';
import {MainContainer} from './Main';
import {Error404Container} from './404';
import {AdminContainer} from './Admin';

export const Routes: React.FC = () => {
	const { pathname, hash, key } = useLocation();

	useEffect(() => {
		if (hash === '') {
			window.scrollTo(0, 0);
		} else {
			setTimeout(() => {
				const id = hash.replace('#', '');
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView();
				}
			}, 0);
		}
	}, [pathname, hash, key]);

	return (
		<Switch>
			<Route key="main" path={route.main.path} element={<MainContainer />} />
			<Route key="admin" path={route.admin.path} element={<AdminContainer />} />
			<Route key="all" path={route.all.path} element={<Error404Container />} />
		</Switch>
	);
};
