import React from 'react';
import {Routes} from './containers/Routes';
import {RecoilRoot} from 'recoil';
import {theme} from './ui-kit/theme/palette';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {TranslateProvider} from './providers/withTranslate';
import {GlobalStyles} from './styles';

export const App = () => {
	return (
		<RecoilRoot>
			<TranslateProvider>
				<BrowserRouter>
					<ThemeProvider theme={theme.light}>
						<GlobalStyles />
						<Routes />
					</ThemeProvider>
				</BrowserRouter>
			</TranslateProvider>
		</RecoilRoot>
	);
};
