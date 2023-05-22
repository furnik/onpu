import React from 'react';
import {StyledBtn} from './styles';
import {Link} from 'react-router-dom';

export type TBtn = {
  variant?: 'primary' | 'secondary';
  width?: number;
  height?: number;
  onClick?: () => void;
  children?: React.ReactNode;
  to?: string;
};

type Props = TBtn & { as?: keyof JSX.IntrinsicElements };

export const Button: React.FC<Props> = ({children, to, ...props}) => (
	<StyledBtn {...props}>
		{to && <Link to={to} />}
		{children}
	</StyledBtn>
);
