import styled, {css} from 'styled-components';
import {TText} from './index';
import {theme} from '../theme/palette';
import {Media} from '../theme/breakpoints';

export const fontSizeDesktop = ({variant, sizeD}: TText) => {
	if (sizeD) {
		return sizeD + 'px';
	}
	switch (variant) {
	case 'h1':
		return '60px';
	case 'h2':
		return '36px';
	case 'h3':
		return '20px';
	case 'h4':
		return '18px';
	case 'h5':
		return '16px';
	default:
		return '14px';
	}
};

export const fontSizeTablet = ({variant, sizeT, sizeD}: TText) => {
	if (sizeT) {
		return sizeT + 'px';
	}
	if (sizeD) {
		return sizeD + 'px';
	}
	switch (variant) {
	case 'h1':
		return '60px';
	case 'h2':
		return '36px';
	case 'h3':
		return '20px';
	case 'h4':
		return '18px';
	case 'h5':
		return '16px';
	default:
		return '14px';
	}
};

export const fontSizeMobile = ({variant, sizeM, sizeT, sizeD}: TText) => {
	if (sizeM) {
		return sizeM + 'px';
	}
	if (sizeT) {
		return sizeT + 'px';
	}
	if (sizeD) {
		return sizeD + 'px';
	}
	switch (variant) {
	case 'h1':
		return '60px';
	case 'h2':
		return '36px';
	case 'h3':
		return '20px';
	case 'h4':
		return '18px';
	case 'h5':
		return '16px';
	default:
		return '14px';
	}
};

export const fontWeight = ({variant, weight}: TText) => {
	switch (weight) {
	case 'regular':
		return 400;
	case 'medium':
		return 500;
	case 'semi-bold':
		return 600;
	}
	switch (variant) {
	case 'h1':
		return 600;
	case 'h2':
		return 600;
	case 'h3':
		return 400;
	case 'h4':
		return 500;
	case 'h5':
		return 400;
	default:
		return 400;
	}
};

const textAlign = ({textAlign}: TText) => {
	if (textAlign) {
		return textAlign;
	}
	return 'left';
};

const textDecoration = ({decoration}: TText) => {
	if (decoration) {
		return decoration;
	}
	return 'none';
};

export const textColor = ({color}: TText) => {
	switch (color) {
	case 'red':
		return theme.light.red;
	case 'dark':
		return theme.light.dark;
	case 'dark_2':
		return theme.light.dark_2;
	case 'gray_1':
		return theme.light.gray_1;
	case 'gray_7':
		return theme.light.gray_7;
	case 'white':
		return theme.light.white;
	case 'black':
		return theme.light.black;
	case 'blue_1':
		return theme.light.blue_1;
	default:
		return theme.light.black;
	}
};

const styles = css`
  font-family: Inter, sans-serif;
  font-size: ${fontSizeDesktop};
  font-weight: ${fontWeight};
  text-align: ${textAlign};
  line-height: 150%;
  color: ${textColor};
	text-decoration: ${textDecoration};
	${Media.down.m} {
		font-size: ${fontSizeTablet};
	}
	${Media.down.xxs} {
		font-size: ${fontSizeMobile};
	}
`;

export const H1 = styled.h1<TText>`
  ${styles};
`;
export const H2 = styled.h2<TText>`
  ${styles};
`;
export const H3 = styled.h3<TText>`
  ${styles};
`;
export const H4 = styled.h4<TText>`
  ${styles};
`;
export const H5 = styled.h5<TText>`
  ${styles};
`;
export const H6 = styled.h6<TText>`
  ${styles};
`;
