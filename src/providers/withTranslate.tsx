import React, {PropsWithChildren, useCallback, useEffect, useState} from 'react';

import i18next, {BackendModule, ResourceKey} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {format as dateFnsFormat} from 'date-fns';
import {enUS as englandDateLocale, uk as ukraineDateLocale} from 'date-fns/locale';
import {useRecoilValue} from 'recoil';
import {languageState} from '../store/language';
const MISSING_TRANSLATION_KEY = 'missing_translation_key';

export enum localeType {
  ua = 'ua',
  en = 'en',
}

const dateFnsLocales = {
	[localeType.en]: englandDateLocale,
	[localeType.ua]: ukraineDateLocale,
};

export enum NamespaceType {
	footer = 'footer',
	header = 'header',
	main = 'main',
	about = 'about',
	add = 'add',
	catalog = 'catalog',
	error = 'error',
	admin = 'admin'
}

const fallbackLng = localeType.ua;
const defaultNS = NamespaceType.header;
const ns = Object.values(NamespaceType);

interface TranslationType {
	[NamespaceType.footer]: ResourceKey;
	[NamespaceType.header]: ResourceKey;
	[NamespaceType.main]: ResourceKey;
	[NamespaceType.about]: ResourceKey;
	[NamespaceType.add]: ResourceKey;
	[NamespaceType.catalog]: ResourceKey;
	[NamespaceType.error]: ResourceKey;
	[NamespaceType.admin]: ResourceKey;
}

type translationFileLoader = () => TranslationType;

interface LocaleType {
  name: string;
  translationFileLoader: translationFileLoader;
}

interface SupportedLocalesType {
  [localeType.ua]: LocaleType;
  [localeType.en]: LocaleType;
}

const supportedLocales: SupportedLocalesType = {
	[localeType.ua]: {
		name: 'Ukrainian',
		translationFileLoader: (): TranslationType => ({
			[NamespaceType.footer]: require('../translations/ua/footer.json'),
			[NamespaceType.header]: require('../translations/ua/header.json'),
			[NamespaceType.main]: require('../translations/ua/main.json'),
			[NamespaceType.about]: require('../translations/ua/about.json'),
			[NamespaceType.add]: require('../translations/ua/add.json'),
			[NamespaceType.catalog]: require('../translations/ua/catalog.json'),
			[NamespaceType.error]: require('../translations/ua/error.json'),
			[NamespaceType.admin]: require('../translations/ua/admin.json'),
		}),
	},
	[localeType.en]: {
		name: 'English',
		translationFileLoader: (): TranslationType => ({
			[NamespaceType.footer]: require('../translations/en/footer.json'),
			[NamespaceType.header]: require('../translations/en/header.json'),
			[NamespaceType.main]: require('../translations/en/main.json'),
			[NamespaceType.about]: require('../translations/en/about.json'),
			[NamespaceType.add]: require('../translations/en/add.json'),
			[NamespaceType.catalog]: require('../translations/en/catalog.json'),
			[NamespaceType.error]: require('../translations/en/error.json'),
			[NamespaceType.admin]: require('../translations/en/admin.json'),
		}),
	},
};

const translationLoader: BackendModule = {
	type: 'backend',
	init: (): boolean => {
		return true;
	},
	create: (): boolean => {
		return true;
	},
	read: function (language: localeType, namespace: NamespaceType, callback) {
		let resource = null;
		let error = null;

		try {
			resource = supportedLocales[language].translationFileLoader()[namespace];
		} catch (_error) {
			error = _error;
		}

		if (!resource) {
			return callback(Error('Not found resource'), '');
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		callback(error, resource);
	},
};

//Провайдер для взаємодії с перекладами

export const TranslateProvider: React.FC<PropsWithChildren> = ({children}) => {
	const [isInit, setInit] = useState<boolean>(false);
	const language = useRecoilValue(languageState);

	const _init = async (): Promise<boolean> => {
		const lng = (await window.localStorage.getItem('language')) || fallbackLng;

		await i18next
			.use(translationLoader)
			.use(initReactI18next)
			.init({
				fallbackLng,
				lng,
				ns,
				defaultNS,
				parseMissingKeyHandler: (key: string) => {
					return `${MISSING_TRANSLATION_KEY} "${key}"`;
				},
				// debug: true,
				interpolation: {
					format: (value, format, lang): string => {
						if (format === 'uppercase') {
							return value.toUpperCase();
						}
						if (format === 'lowercase') {
							return value.toLowerCase();
						}
						if (format === 'capitalize') {
							return value
								.split(' ')
								.map((v: string) => v.charAt(0).toUpperCase() + v.slice(1))
								.join(' ');
						}
						if (value instanceof Date) {
							return dateFnsFormat(value, format || 'Pp', {
								locale: dateFnsLocales[lang as localeType],
							});
						}
						return value;
					},
				},
			});

		setInit(true);
		return true;
	};

	const init = useCallback(_init, []);

	useEffect(() => {
		init();
	}, [init, language]);

	if (!isInit) {
		return null;
	}

	return <>{children}</>;
};
