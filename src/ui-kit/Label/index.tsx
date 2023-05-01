import React from 'react';
import {Wrapper, Dot} from './styles';

export const Label: React.FC<{content: string}> = ({content}) => {
	return <Wrapper><Dot />{content}</Wrapper>;
};
