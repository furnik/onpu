import React from 'react';
import {Wrapper, List} from './styles';
import {Container} from '../../ui-kit/Container';
import {Search} from './Search';
import {Card} from './Card';

const card = {
	id: ' k dkjbdf bn bs jjnnc mv sdnoiesvn',
	specialties: ['122 Комп\'ютерні науки', '123 Комп\'ютерні науки'],
	title: 'Електронний каталог ОНТУ каталог ОНТУ',
	description: 'Електронний каталог — це сукупність напрацьованих електронних описів різних типів і видів документів, які має Науково-технічна бібліотека Одеського національного технологічного університету.',
	authors: ['Влад Беленко', 'Влад Беленко'],
	managers: ['Світлана Вікторівна Болтач'],
	types: ['Додоток', 'До лекцій'],
	tags: ['HTML', 'CSS', 'JS', 'TS', 'PHP'],
	link: {
		url: 'https://library.ontu.edu.ua',
		name: 'library.ontu.edu.ua',
	},
	year: '2023'
};

const list = [card, card, card, card, card, card];

export const Catalog: React.FC = () => {
	return (
		<Container $direction="row">
			<Wrapper>
				<Search>
					<List>
						{list.map((item) => (
							<Card key={item.id} {...item} />
						))}
					</List>
				</Search>
			</Wrapper>
		</Container>
	);
};
