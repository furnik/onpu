import React, {MouseEventHandler} from 'react';
import {
	AddInputWrapper,
	CloseBtnWrapper,
	FormWrapper,
	GhostButton,
	GlobalStyles,
	SwitcherContainer,
	TechContainer,
	TechWrapper,
	Wrapper,
	Description,
} from './styles';
import {CloseBtn} from '../../../ui-kit/Button/Close';
import {Typography} from '../../../ui-kit/Text';
import {useTranslation} from 'react-i18next';
import {Input} from '../../../ui-kit/Input';
import {Select} from '../../../ui-kit/Select';
import {Switcher} from '../../Layout/Header/Switcher';
import {Fields, TProjectError} from '../../../types/project';
import {FormFields, InputTypes} from '../../../constants/project';
import {Textarea} from '../../../ui-kit/Textarea';
import {Label} from '../../../ui-kit/Label';
import {Button} from '../../../ui-kit/Button';

interface FormProps {
	error: TProjectError;
	tags: Array<string>;
	types: Array<string>;
	values: Fields;
	specialities: Array<string>;
	onClose: () => void;
	onChange: (type: InputTypes, field: FormFields, index?: number) => (value: string) => void;
	onItemAdd: (field: FormFields) => () => void;
	onItemRemove: (field: FormFields, index: number) => () => void;
	onSubmit: (callback: () => void) => Promise<void>;
	onClear: () => void;
}

//Компонент форми створення проєкту

const Form: React.FC<FormProps> = ({onClose, values, onChange, types, tags, specialities, onItemAdd, onItemRemove, onSubmit, error, onClear}) => {
	const {t} = useTranslation();
	const onClick: MouseEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
	};
	//Функція обгортка для функції створення проєкту
	const onCreate = () => {
		onSubmit(onClose);
	};
	return (
		<Wrapper>
			<GlobalStyles />
			<FormWrapper onClick={onClick} onChange={onClear}>
				<CloseBtnWrapper>
					<CloseBtn onClick={onClose} />
				</CloseBtnWrapper>
				<Typography textAlign="center" variant="h4" weight="medium" color="dark">{t('add:form.formTitle')}</Typography>
				<SwitcherContainer>
					<Switcher />
				</SwitcherContainer>
				<Description textAlign="center" variant="h6" color="gray_1">{t('add:form.formDescription')}</Description>
				<Input error={error[FormFields.title]} placeholder={t('add:form.title')} onChange={onChange(InputTypes.text, FormFields.title)} value={values[FormFields.title]} />
				<Textarea error={error[FormFields.description]} message={t('add:form.symbols')} placeholder={t('add:form.description')} onChange={onChange(InputTypes.text, FormFields.description)} value={values[FormFields.description]} />
				{values[FormFields.authors].map((author, index, array) => (
					<AddInputWrapper key={author + index}>
						<Input error={index === array.length - 1 ? error[FormFields.authors] : undefined} placeholder={t('add:form.author')} value={author} onChange={onChange(InputTypes.array, FormFields.authors, index)} />
						{index !== 0 && (
							<GhostButton onClick={onItemRemove(FormFields.authors, index)} isAbsolute={true}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.5 7.00033H6.16667M6.16667 7.00033H19.5M6.16667 7.00033V18.667C6.16667 19.109 6.34226 19.5329 6.65482 19.8455C6.96738 20.1581 7.39131 20.3337 7.83333 20.3337H16.1667C16.6087 20.3337 17.0326 20.1581 17.3452 19.8455C17.6577 19.5329 17.8333 19.109 17.8333 18.667V7.00033H6.16667ZM8.66667 7.00033V5.33366C8.66667 4.89163 8.84226 4.46771 9.15482 4.15515C9.46738 3.84259 9.89131 3.66699 10.3333 3.66699H13.6667C14.1087 3.66699 14.5326 3.84259 14.8452 4.15515C15.1577 4.46771 15.3333 4.89163 15.3333 5.33366V7.00033M10.3333 11.167V16.167M13.6667 11.167V16.167" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</GhostButton>
						)}
						{index === array.length - 1 && <GhostButton onClick={onItemAdd(FormFields.authors)}>{t('add:form.addAuthor')}</GhostButton>}
					</AddInputWrapper>
				))}
				{values[FormFields.managers].map((author, index, array) => (
					<AddInputWrapper key={author + index}>
						<Input error={index === array.length - 1 ? error[FormFields.managers] : undefined} placeholder={t('add:form.manager')} value={author} onChange={onChange(InputTypes.array, FormFields.managers, index)} />
						{index !== 0 && (
							<GhostButton onClick={onItemRemove(FormFields.managers, index)} isAbsolute={true}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.5 7.00033H6.16667M6.16667 7.00033H19.5M6.16667 7.00033V18.667C6.16667 19.109 6.34226 19.5329 6.65482 19.8455C6.96738 20.1581 7.39131 20.3337 7.83333 20.3337H16.1667C16.6087 20.3337 17.0326 20.1581 17.3452 19.8455C17.6577 19.5329 17.8333 19.109 17.8333 18.667V7.00033H6.16667ZM8.66667 7.00033V5.33366C8.66667 4.89163 8.84226 4.46771 9.15482 4.15515C9.46738 3.84259 9.89131 3.66699 10.3333 3.66699H13.6667C14.1087 3.66699 14.5326 3.84259 14.8452 4.15515C15.1577 4.46771 15.3333 4.89163 15.3333 5.33366V7.00033M10.3333 11.167V16.167M13.6667 11.167V16.167" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</GhostButton>
						)}
						{index === array.length - 1 && <GhostButton onClick={onItemAdd(FormFields.managers)}>{t('add:form.addManager')}</GhostButton>}
					</AddInputWrapper>
				))}
				<Input error={error[FormFields.year]} placeholder={t('add:form.year')} onChange={onChange(InputTypes.text, FormFields.year)} value={values[FormFields.year]} type="number" />
				<Select error={error[FormFields.types]} placeholder={t('add:form.type')} onChange={onChange(InputTypes.select, FormFields.types)} values={types} defaultValues={values[FormFields.types]} />
				<Select error={error[FormFields.specialities]} placeholder={t('add:form.speciality')} onChange={onChange(InputTypes.select, FormFields.specialities)} values={specialities} defaultValues={values[FormFields.specialities]} />
				<TechWrapper>
					<Select error={error[FormFields.tags]} placeholder={t('add:form.technology')} onChange={onChange(InputTypes.select, FormFields.tags)} values={tags} defaultValues={values[FormFields.tags]} />
					{values[FormFields.tags].length > 0 && (
						<TechContainer>
							{values[FormFields.tags].map((item) => <Label key={item} content={item} />)}
						</TechContainer>
					)}
				</TechWrapper>
				<Input error={error[FormFields.link]} placeholder={t('add:form.link')} onChange={onChange(InputTypes.text, FormFields.link)} value={values[FormFields.link]} />
				<Button onClick={onCreate} variant="primary">{t('add:form.add')}</Button>
			</FormWrapper>
		</Wrapper>
	);
};

export default Form;
