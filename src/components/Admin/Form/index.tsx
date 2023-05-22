import React, {PropsWithChildren} from 'react';
import {FixedWrapper, GlobalStyles, FormWrapper, CloseBtnWrapper} from '../styles';
import {CloseBtn} from '../../../ui-kit/Button/Close';

interface FormProps {
  onClose: () => void;
}

//Компонент обгортки форм створення та редагування, що робить модальне вікно

export const Form: React.FC<PropsWithChildren<FormProps>> = ({onClose, children}) => {
	return (
		<FixedWrapper>
			<GlobalStyles />
			<FormWrapper>
				<CloseBtnWrapper>
					<CloseBtn onClick={onClose} />
				</CloseBtnWrapper>
				{children}
			</FormWrapper>
		</FixedWrapper>
	);
};
