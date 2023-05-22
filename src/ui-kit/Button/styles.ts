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
	position: relative;
	a {
		position: absolute;
		z-index: 2;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
	}
`;

export const StyledCloseBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const TopButton = styled.button<{isShow?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 100%;
  background: ${({theme}) => theme.white};
	box-shadow: 0 4px 10px rgba(129, 129, 129, 0.25);

  position: fixed;
  bottom: 40px;
  right: 20px;
  z-index: 11;
  cursor: pointer;
  opacity: ${({isShow}) => (isShow ? 1 : 0)};
  transition: opacity 0.5s;
`;
