import React, {ChangeEvent, useState} from 'react';
import {SearchStyledInput, SearchLabel, CloseBtn} from './styles';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<Props> = ({placeholder, onChange}) => {
	const [value, setValue] = useState('');
	const onCloseHandler = () => {
		setValue('');
	};
	const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		onChange(event.target.value);
	};
	return (
		<SearchLabel>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<SearchStyledInput value={value} onChange={changeValueHandler} type="text" placeholder={placeholder} />
			<CloseBtn onClick={onCloseHandler}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4182 20 12C20 7.5818 16.4183 4 12 4C7.58172 4 4 7.5818 4 12C4 16.4182 7.58172 20 12 20ZM15.5442 8.45588C15.8382 8.74977 15.8382 9.22656 15.5442 9.52068L13.0648 12L15.5442 14.4793C15.8382 14.7734 15.8382 15.2502 15.5442 15.5441C15.2501 15.8382 14.7734 15.8382 14.4793 15.5441L12 13.0648L9.52065 15.5441C9.22662 15.8382 8.74989 15.8382 8.45582 15.5441C8.16179 15.2502 8.16179 14.7734 8.45582 14.4793L10.9352 12L8.45582 9.52068C8.16179 9.22656 8.16179 8.74977 8.45582 8.45588C8.74986 8.16176 9.22659 8.16176 9.52065 8.45588L12 10.9352L14.4793 8.45588C14.7734 8.16176 15.2501 8.16176 15.5442 8.45588Z" fill="#D0D5DD"/>
				</svg>
			</CloseBtn>
		</SearchLabel>
	);
};
