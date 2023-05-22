import {useState} from 'react';
import {CreateProjectType, Fields, TGetProjects, TGetSearch, TProject, TProjectError, TSearch} from '../types/project';
import {FormFields, InputTypes} from '../constants/project';
import {useRecoilValue} from 'recoil';
import {languageState} from '../store/language';
import {Languages} from '../constants/translate';
import {ApolloQueryResult, useMutation, useQuery} from '@apollo/client';
import {GetTagQuery} from '../queries/tag';
import {GetSpecialityQuery} from '../queries/speciality';
import {GetTypeQuery} from '../queries/type';
import {CommonValueT} from '../types/common';
import {
	CreateProjectQuery,
	DeleteProjectsQuery,
	GetAllProjectsQuery,
	GetProjectsQuery, GetSearchQuery,
	UpdateProjectsQuery
} from '../queries/project';
import {getProjectValidate} from '../helpers/validate';
import {parseProject} from '../helpers/parse';

const initialValue: CreateProjectType = {
	status: 'pending',
	en: {
		title: '',
		description: '',
		specialities: [],
		authors: [''],
		managers: [''],
		types: [],
		tags: [],
		link: '',
		year: '',
	},
	ua: {
		title: '',
		description: '',
		specialities: [],
		authors: [''],
		managers: [''],
		types: [],
		tags: [],
		link: '',
		year: '',
	}
};

//Хук для отримання, видалення та підтвердження проєкту

export const useAdminProject = () => {
	const {data, refetch} = useQuery(GetAllProjectsQuery);
	const [update] = useMutation(UpdateProjectsQuery);
	const [remove] = useMutation(DeleteProjectsQuery);

	const onApprove = async (project: TProject) => {
		try {
			const approveData = await update({variables: {input: {...parseProject(project), status: 'approved'}}});
			if (approveData) {
				refetch();
			}
		} catch (err) {
			console.log(err);
		}
	};

	const onDelete = async (id: string) => {
		try {
			const deleteData = await remove({variables: {input: {id}}});
			if (deleteData) {
				refetch();
			}
		} catch (err) {
			console.log(err);
		}
	};

	return {
		data: data && data.getAllProjects ? data.getAllProjects: [],
		refetch,
		onApprove,
		onDelete,
	};
};

//Хук для створення проєктів

export const useProject = (data?: CreateProjectType, refetch?: () => Promise<ApolloQueryResult<unknown>>) => {
	const language = useRecoilValue(languageState);
	const {data: tags} = useQuery(GetTagQuery);
	const {data: specialities} = useQuery(GetSpecialityQuery);
	const {data: types} = useQuery(GetTypeQuery);
	const [update] = useMutation(UpdateProjectsQuery);
	const [create] = useMutation(CreateProjectQuery);
	const [values, setValues] = useState<CreateProjectType>(data || initialValue);
	const [error, setError] = useState<TProjectError>({} as TProjectError);

	const onClear = () => {
		setError({} as TProjectError);
	};

	const onChange = (type: InputTypes, field: FormFields, index?: number) => (value: string) => {
		if (type === InputTypes.text) {
			setValues((prev) => ({...prev, [language as Languages]: {
				...prev[language as Languages],
				[field]: value
			}}));
		}
		if (type === InputTypes.select) {
			const array = values[language as Languages][field] as Array<string>;
			const hasValue = array.find((item) => item === value);
			setValues((prev) => ({...prev, [language as Languages]: {
				...prev[language as Languages],
				[field]: hasValue ? array.filter((item) => item !== value) : [...array, value]
			}}));
		}
		if (type === InputTypes.array && (index || index === 0)) {
			const array = values[language as Languages][field] as Array<string>;
			array[index] = value;
			setValues((prev) => ({...prev, [language as Languages]: {
				...prev[language as Languages],
				[field]: array,
			}}));
		}
	};

	const onItemAdd = (field: FormFields) => () => {
		const array = values[language as Languages][field] as Array<string>;
		setValues((prev) => ({...prev, [language as Languages]: {
			...prev[language as Languages],
			[field]: [...array, '']
		}}));
	};

	const onItemRemove = (field: FormFields, index: number) => () => {
		const array = values[language as Languages][field] as Array<string>;
		setValues((prev) => ({...prev, [language as Languages]: {
			...prev[language as Languages],
			[field]: array.filter((_, idx) => index !== idx),
		}}));
	};

	const onSubmit = async (callback: () => void) => {
		try {
			const error = getProjectValidate(values, setError);
			if (Object.values(error).length) {
				return;
			}
			let response = null;
			if (data) {
				response = await update({variables: {input: parseProject(values as TProject)}});
			} else {
				response = await create({variables: {input: values}});
			}
			if (response) {
				callback();
				refetch?.();
			}
		} catch (err) {
			console.log(err);
		}
	};

	return {
		error,
		values: values[language as Languages] as Fields,
		tags: tags && tags.getTags ? tags.getTags.map((item: CommonValueT) => item[language as Languages]) : [],
		types: types && types.getTypes ? types.getTypes.map((item: CommonValueT) => item[language as Languages]): [],
		specialities: specialities && specialities.getSpecialities ? specialities.getSpecialities.map((item: CommonValueT) => item[language as Languages]) : [],
		onClear,
		onChange,
		onSubmit,
		onItemAdd,
		onItemRemove,
	};
};

//Хук для отримання\пошуку та фільтраціії проєктів

export const useGetProjects = () => {
	const [data, setData] = useState<TSearch>({
		search: '',
		year: '',
		type: [],
		speciality: [],
	});
	const [pagination, setPagination] = useState({limit: 5,
		skip: 0});
	const language = useRecoilValue(languageState);
	const {data: search} = useQuery<TGetSearch>(GetSearchQuery);
	const {data: projects} = useQuery<TGetProjects>(GetProjectsQuery, {variables: {input: data}});
	const onSearch = (value: string) => {
		setData((prev) => ({...prev, search: value}));
	};

	const onChange = (field: 'type' | 'speciality') => (value: string) => {
		const hasValue = data[field].find((item) => item === value);
		setData((prev) => ({...prev, [field]: hasValue ? data[field].filter((item) => item !== value) : [...data[field], value]}));
	};

	const onYear = (year: string) => {
		setData((prev) => ({...prev, year}));
	};

	const onPage = (page: number) => {
		setPagination((prev) => ({...prev, skip: (page) * pagination.limit}));
	};

	const onClear = () => {
		setData((prev) => ({...prev, speciality: [], year: ''}));
	};

	return {
		data,
		pagination,
		count: projects?.getProjects.count || 0,
		projects: projects?.getProjects.projects.slice(pagination.skip, pagination.skip + pagination.limit) || [],
		types: search?.getSearch.types.map((item: CommonValueT) => item[language as Languages]) || [],
		specialities: search?.getSearch.specialities.map((item: CommonValueT) => item[language as Languages]) || [],
		years: search?.getSearch.years || [],
		onSearch,
		onChange,
		onClear,
		onYear,
		onPage,
	};
};
