import React, {useRef, useState} from 'react';
import {StyledButton, Label, ListWrapper, List, ListItem} from './styles';
import {Checkbox} from '../Checkbox';
import {Typography} from '../Text';
import {ErrorText} from '../Input/styles';
import {useTranslation} from 'react-i18next';
import {useOnClickOutside} from '../../hooks/clickOutside';

interface Props {
	error?: string;
  placeholder: string;
  onChange: (value: string) => void;
	values: Array<string>;
	defaultValues: Array<string>;
}

export const Select: React.FC<Props> = ({placeholder, onChange, values, defaultValues, error}) => {
	const {t} = useTranslation();
	const [active, setActive] = useState(false);
	const ref= useRef<HTMLDivElement | null>(null);

	const changeActiveHandler = () => {
		setActive(!active);
	};

	const changeValueHandler = (value: string) => () => {
		onChange(value);
	};

	useOnClickOutside(ref, () => setActive(false));

	return (
		<Label ref={ref}>
			<StyledButton $error={!!error} onClick={changeActiveHandler}>
				{placeholder}
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.42773 4.12598L7.25305 9.6516L12.5599 4.12598" stroke="#D0D5DD" strokeWidth="1.5"/>
				</svg>
			</StyledButton>
			{!!error && <ErrorText>{t(error)}</ErrorText>}
			{active && <ListWrapper>
				<List>
					{values.map((item, index) => <ListItem key={index}>
						<Checkbox onChange={changeValueHandler(item)} value={defaultValues.includes(item)} />
						<Typography variant="h5" weight="medium" color="dark_2">{item}</Typography>
					</ListItem>)}
				</List>
			</ListWrapper>}
		</Label>
	);
};
