import React from 'react';
import {Label, StyledCheckbox} from './styles';

interface Props {
  onChange: (value: boolean) => void;
	value: boolean;
}

export const Checkbox: React.FC<Props> = ({onChange, value}) => {
	const changeValueHandler = () => {
		onChange(!value);
	};

	return (
		<Label>
			<StyledCheckbox $active={value} onClick={changeValueHandler}>
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 4.5L6.75 12.75L3 9" stroke="#2970FF" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</StyledCheckbox>
		</Label>
	);
};
