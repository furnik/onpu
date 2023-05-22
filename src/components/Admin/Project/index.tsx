import React, {useState} from 'react';
import {List, RowWrapper, BlockWrapper} from '../styles';
import {useAdminProject} from '../../../hooks/project';
import {TProject} from '../../../types/project';
import {Card} from '../../Catalog/Card';
import {Button} from '../../../ui-kit/Button';
import {useTranslation} from 'react-i18next';
import ProjectForm from './Form';

//Компонент списку проєктів

export const Project: React.FC = () => {
	const [active, setActive] = useState(false);
	const {t} = useTranslation();
	const {data, onDelete, onApprove, refetch} = useAdminProject();

	//Функція для показу модального вікна
	const changeActiveHandler = () => {
		setActive(!active);
	};

	//Функція обгортка для видалення
	const deleteHandler = (id: string) => () => {
		onDelete(id);
	};

	//Функція обгортка для підтведження
	const approveHandler = (project: TProject) => () => {
		onApprove(project);
	};
	return (
		<List>
			{data.map((project: TProject) => (
				<RowWrapper $project key={project.id}>
					{active && <ProjectForm refetch={refetch} data={project} onClose={changeActiveHandler} />}
					<Card {...project} />
					<BlockWrapper $project>
						{project.status === 'pending' && (
							<>
								<Button onClick={approveHandler(project)} width={140} variant="primary">{t('admin:button.approve')}</Button>
								<Button onClick={deleteHandler(project.id)} width={140} variant="primary">{t('admin:button.reject')}</Button>
							</>
						)}
						<Button onClick={changeActiveHandler} width={140} variant="primary">{t('admin:button.update')}</Button>
						<Button onClick={deleteHandler(project.id)} width={140} variant="primary">{t('admin:button.delete')}</Button>
					</BlockWrapper>
				</RowWrapper>
			))}
		</List>
	);
};
