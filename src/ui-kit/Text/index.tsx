import React from 'react';
import {H1, H2, H3, H4, H5, H6} from './styles';

export type TText = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'regular' | 'medium' | 'semi-bold';
  textAlign?: 'left' | 'center' | 'right';
  decoration?: 'underline';
  color?: 'red' | 'black' | 'gray_1' | 'gray_7' | 'dark' | 'dark_2' | 'white' | 'blue_1' | 'blue_6';
	sizeD?: number;
	sizeT?: number;
	sizeM?: number;
  children?: React.ReactNode;
};

export const Typography: React.FC<TText> = ({children, variant, ...props}) => {
	switch (variant) {
	case 'h1':
		return <H1 variant={variant} {...props}>{children}</H1>;
	case 'h2':
		return <H2 variant={variant} {...props}>{children}</H2>;
	case 'h3':
		return <H3 variant={variant} {...props}>{children}</H3>;
	case 'h4':
		return <H4 variant={variant} {...props}>{children}</H4>;
	case 'h5':
		return <H5 variant={variant} {...props}>{children}</H5>;
	default:
		return <H6 variant={variant} {...props}>{children}</H6>;
	}
};
