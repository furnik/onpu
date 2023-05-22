import React, {PropsWithChildren} from 'react';
import {ApolloClient, ApolloProvider as Provider, InMemoryCache, from, createHttpLink} from '@apollo/client';
import {typeDefs} from './defs';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/graphql',
});

export const client = new ApolloClient({
	typeDefs,
	cache: new InMemoryCache(),
	link: from([httpLink]),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'network-only',
		},
		query: {
			fetchPolicy: 'network-only',
		},
		mutate: {
			fetchPolicy: 'network-only',
		},
	},
});

//Провайдер для взаємодії с сервером

export const ApolloProvider: React.FC<PropsWithChildren> = ({children}) => <Provider client={client}>{children}</Provider>;
