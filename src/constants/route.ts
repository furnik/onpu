import {Route} from '../helpers/route';

export const route = {
	all: Route.of({path: '*'}),
	main: Route.of({path: '/'}),
	admin: Route.of({path: '/admin'}),
};
