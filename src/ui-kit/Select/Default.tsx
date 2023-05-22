import React, {useRef, useState} from 'react';
import {DefaultButton, DefaultLabel, DefaultListWrapper, List, ListItem, GhostButton} from './styles';
import {Typography} from '../Text';
import {useOnClickOutside} from '../../hooks/clickOutside';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
  values: Array<string>;
	defaultValue: string;
}

export const DefaultSelect: React.FC<Props> = ({placeholder, onChange, values, defaultValue}) => {
	const [active, setActive] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	const changeActiveHandler = () => {
		setActive(!active);
	};

	const changeValueHandler = (value: string) => () => {
		onChange(value);
		changeActiveHandler();
	};

	useOnClickOutside(ref, () => setActive(false));

	return (
		<DefaultLabel ref={ref}>
			<DefaultButton onClick={changeActiveHandler}>
				{defaultValue || placeholder}
				<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.42871 4.62598L7.25402 10.1516L12.5609 4.62598" stroke="#9BA3B1" strokeWidth="1.5"/>
				</svg>
			</DefaultButton>
			{active && <DefaultListWrapper>
				<List>
					{values.map((item, index) => <ListItem onClick={changeValueHandler(item)} key={index}>
						<GhostButton>
							<Typography variant="h5" weight="medium" color="dark_2">{item}</Typography>
						</GhostButton>
					</ListItem>)}
				</List>
			</DefaultListWrapper>}
		</DefaultLabel>
	);
};
