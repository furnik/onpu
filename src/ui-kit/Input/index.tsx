import React, {useEffect, useState} from 'react';
import {StyledInput, Label, ErrorText} from './styles';
import {useTranslation} from 'react-i18next';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
	value?: string;
	error?: string;
	type?: 'text' | 'number';
}

export const Input: React.FC<Props> = ({placeholder, onChange, error, value, type= 'text'}) => {
	const {t} = useTranslation();
	const [defaultValue, setValue] = useState(value);
	const changeValue = (text: string) => {
		setValue(text);
	};
	const onBlur = () => {
		if (defaultValue) {
			onChange(defaultValue);
		}
	};
	useEffect(() => {
		setValue(value);
	}, [value]);
	return (
		<Label>
			<StyledInput $error={!!error} onBlur={onBlur} value={defaultValue} onChange={(elem) => changeValue(elem.target.value)} type={type} placeholder={placeholder} />
			{!!error && <ErrorText>{t(error)}</ErrorText>}
		</Label>
	);
};
