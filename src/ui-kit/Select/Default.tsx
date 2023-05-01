import React, {useState} from 'react';
import {DefaultButton, DefaultLabel, DefaultListWrapper, List, ListItem} from './styles';
import {Typography} from '../Text';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
  values: Array<string>;
}

export const DefaultSelect: React.FC<Props> = ({placeholder, onChange, values}) => {
	const [active, setActive] = useState(false);

	const changeActiveHandler = () => {
		setActive(!active);
	};

	return (
		<DefaultLabel>
			<DefaultButton onClick={changeActiveHandler}>
				{placeholder}
				<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.42871 4.62598L7.25402 10.1516L12.5609 4.62598" stroke="#9BA3B1" strokeWidth="1.5"/>
				</svg>
			</DefaultButton>
			{active && <DefaultListWrapper>
				<List>
					{values.map((item, index) => <ListItem key={index}>
						<Typography variant="h5" weight="medium" color="dark_2">{item}</Typography>
					</ListItem>)}
				</List>
			</DefaultListWrapper>}
		</DefaultLabel>
	);
};
