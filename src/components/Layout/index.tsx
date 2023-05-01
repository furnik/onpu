import React, {PropsWithChildren} from 'react';
import {Wrapper} from './styles';
import {Footer} from './Footer';
import {Header} from './Header';

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
	return (
		<Wrapper>
			<Header />
			{children}
			<Footer />
		</Wrapper>
	);
};
