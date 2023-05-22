import React, {useState} from 'react';
import {Tabs} from '../../types/admin';
import {TabsWrapper, Wrapper, RowWrapper, SwitcherWrapper} from './styles';
import {Container} from '../../ui-kit/Container';
import {Button} from '../../ui-kit/Button';
import {Typography} from '../../ui-kit/Text';
import {Type} from './Type';
import {Tag} from './Tag';
import {Speciality} from './Speciality';
import {Project} from './Project';
import {useTranslation} from 'react-i18next';
import {Switcher} from '../Layout/Header/Switcher';

const tabs = [Tabs.types, Tabs.tags, Tabs.speciality, Tabs.projects];

//Сторінка адміністратора

const Admin: React.FC = () => {
	const {t} = useTranslation();
	const [tab, setTab] = useState(Tabs.types);

	//Функція для зміни відображення активного списку
	const changeTabHandler = (value: Tabs) => () => {
		setTab(value);
	};

	return (
		<Container $direction="row">
			<Wrapper>
				<RowWrapper>
					<Typography sizeT={30} variant="h1" weight="semi-bold" color="white">{t(tab)}</Typography>
					<SwitcherWrapper>
						<Switcher />
					</SwitcherWrapper>
				</RowWrapper>
				<TabsWrapper>
					{tabs.map((item) => <Button onClick={changeTabHandler(item)} variant={tab === item ? 'primary' : 'secondary'} width={180} key={item}>{t(item)}</Button>)}
				</TabsWrapper>
				{tab === Tabs.types && <Type />}
				{tab === Tabs.tags && <Tag />}
				{tab === Tabs.speciality && <Speciality />}
				{tab === Tabs.projects && <Project />}
			</Wrapper>
		</Container>
	);
};

export default Admin;
