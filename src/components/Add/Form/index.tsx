import React, {MouseEventHandler} from 'react';
import {Wrapper, GlobalStyles, FormWrapper, CloseBtnWrapper} from './styles';
import {CloseBtn} from '../../../ui-kit/Button/Close';
import {Typography} from '../../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {Input} from '../../../ui-kit/Input';
import {Select} from '../../../ui-kit/Select';

interface FormProps {
	onClose: () => void;
}

const Form: React.FC<FormProps> = ({onClose}) => {
	const {t} = useTranslation();
	const onClick: MouseEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
	};
	return (
		<Wrapper>
			<GlobalStyles />
			<FormWrapper onClick={onClick}>
				<CloseBtnWrapper>
					<CloseBtn onClick={onClose} />
				</CloseBtnWrapper>
				<Typography textAlign="center" variant="h4" weight="medium" color="dark">{t('add:form.formTitle')}</Typography>
				<Input placeholder={t('add:form.title')} onChange={() => console.log('ok')} />
				<Input placeholder={t('add:form.description')} onChange={() => console.log('ok')} />
				<Input placeholder={t('add:form.author')} onChange={() => console.log('ok')} />
				<Input placeholder={t('add:form.manager')} onChange={() => console.log('ok')} />
				<Input placeholder={t('add:form.year')} onChange={() => console.log('ok')} />
				<Select placeholder={t('add:form.type')} onChange={() => console.log('ok')} values={[]} />
				<Select placeholder={t('add:form.specialty')} onChange={() => console.log('ok')} values={[]} />
				<Select placeholder={t('add:form.technology')} onChange={() => console.log('ok')} values={[]} />
				<Input placeholder={t('add:form.link')} onChange={() => console.log('ok')} />
			</FormWrapper>
		</Wrapper>
	);
};

export default Form;
