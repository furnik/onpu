import styled, {css} from 'styled-components';
import {TBtn} from './index';
import {theme} from '../theme/palette';

const textColor = ({variant}: TBtn) => {
	switch (variant) {
	case 'primary':
		return theme.light.white;
	default:
		return theme.light.blue_1;
	}
};

const backgroundColor = ({variant}: TBtn) => {
	switch (variant) {
	case 'primary':
		return theme.light.blue_1;
	default:
		return 'transparent';
	}
};

const width = ({width}: TBtn) => {
	return width ? `${width}px` : '228px';
};

const height = ({height}: TBtn) => {
	return height ? `${height}px` : '48px';
};

const border = ({variant}: TBtn) => {
	switch (variant) {
	case 'primary':
		return 'none';
	default:
		return `1px solid ${theme.light.blue_5}`;
	}
};

const hoverBackground = ({variant}: TBtn) => {
	switch (variant) {
	case 'primary':
		return theme.light.blue_5;
	default:
		return theme.light.blue_1;
	}
};

const styles = css`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  color: ${textColor};
  background: ${backgroundColor};
  border: ${border};
  cursor: pointer;
  width: ${width};
	min-width: ${width};
  height: ${height};
  border-radius: 8px;
  transition: 0.3s;
  padding: 10px 20px;
  &:hover {
    background: ${hoverBackground};
		color: ${theme.light.white};
  }
`;

export const StyledBtn = styled.button<TBtn>`
  ${styles};
`;

export const StyledCloseBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;
