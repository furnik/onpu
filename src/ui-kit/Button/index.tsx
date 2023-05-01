import React from 'react';
import {StyledBtn} from './styles';

export type TBtn = {
  variant?: 'primary' | 'secondary';
  width?: number;
  height?: number;
  onClick?: () => void;
  children?: React.ReactNode;
};

type Props = TBtn & { as?: keyof JSX.IntrinsicElements };

export const Button: React.FC<Props> = ({children, ...props}) => (
	<StyledBtn {...props}>
		{children}
	</StyledBtn>
);
