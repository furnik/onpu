import React, {useEffect, useState} from 'react';
import {StyledInput, Label, ErrorText, MessageText} from './styles';
import {useTranslation} from 'react-i18next';

interface Props {
  placeholder: string;
	message: string;
  onChange: (value: string) => void;
  value?: string;
  error?: string;
}

export const Textarea: React.FC<Props> = ({placeholder, onChange, error, value, message}) => {
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
	const text = defaultValue && defaultValue?.length > 250 ? defaultValue.slice(0, 250) : defaultValue;
	const symbols = defaultValue ? 250 - defaultValue.length : 250;
	return (
		<Label>
			<StyledInput $error={!!error} onBlur={onBlur} value={text} onChange={(elem) => changeValue(elem.target.value)} placeholder={placeholder} />
			<MessageText>{message}: {symbols}</MessageText>
			{!!error && <ErrorText>{t(error)}</ErrorText>}
		</Label>
	);
};
