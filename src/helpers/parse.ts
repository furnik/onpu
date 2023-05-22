import {TProject} from '../types/project';

//Функція для трансформування отриманих даних

export const parseProject = (data: TProject) => {
	const {ua, en} = data;
	return {
		id: data.id,
		status: data.status,
		ua: {
			title: ua.title,
			description: ua.description,
			specialities: ua.specialities,
			authors: ua.managers,
			managers: ua.managers,
			types: ua.types,
			tags: ua.tags,
			link: ua.link,
			year: ua.year,
		},
		en: {
			title: en.title,
			description: en.description,
			specialities: en.specialities,
			authors: en.managers,
			managers: en.managers,
			types: en.types,
			tags: en.tags,
			link: en.link,
			year: en.year,
		}
	};
};
