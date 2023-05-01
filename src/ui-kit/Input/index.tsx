import React, {useRef} from 'react';
import {StyledInput, Label, ErrorText} from './styles';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
	error?: string;
}

export const Input: React.FC<Props> = ({placeholder, onChange, error}) => {
	const ref = useRef(null);
	return (
		<Label>
			<StyledInput $error={!!error} ref={ref} onChange={(elem) => onChange(elem.target.value)} type="text" placeholder={placeholder} />
			{!!error && <ErrorText>{error}</ErrorText>}
		</Label>
	);
};
