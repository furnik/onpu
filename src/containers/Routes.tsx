import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import {route} from '../constants/route';
import {MainContainer} from './Main';
import {Error404Container} from './404';

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route key="main" path={route.main.path} element={<MainContainer />} />
			<Route key="all" path={route.all.path} element={<Error404Container />} />
		</Switch>
	);
};
