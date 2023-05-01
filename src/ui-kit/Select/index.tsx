import React, {useState} from 'react';
import {StyledButton, Label, ListWrapper, List, ListItem} from './styles';
import {Checkbox} from '../Checkbox';
import {Typography} from '../Text';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
	values: Array<string>;
}

export const Select: React.FC<Props> = ({placeholder, onChange, values}) => {
	const [active, setActive] = useState(false);

	const changeActiveHandler = () => {
		setActive(!active);
	};

	return (
		<Label>
			<StyledButton onClick={changeActiveHandler}>
				{placeholder}
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.42773 4.12598L7.25305 9.6516L12.5599 4.12598" stroke="#D0D5DD" strokeWidth="1.5"/>
				</svg>
			</StyledButton>
			{active && <ListWrapper>
				<List>
					{values.map((item, index) => <ListItem key={index}>
						<Checkbox onChange={() => console.log('ckec')} value={false} />
						<Typography variant="h5" weight="medium" color="dark_2">{item}</Typography>
					</ListItem>)}
				</List>
			</ListWrapper>}
		</Label>
	);
};
