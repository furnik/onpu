import styled from 'styled-components';
import {Typography} from '../Text';

export const StyledInput = styled.textarea<{$error: boolean}>`
  width: 100%;
  height: 86px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${({theme, $error}) => ($error ? theme.red : theme.gray_2)};
  color: ${({theme, $error}) => ($error ? theme.red : theme.dark)};
  padding: 10px 14px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  resize: none;
  &::placeholder {
    color: ${(props) => props.theme.gray_1};
    font-size: 16px;
    font-family: Inter, sans-serif;
  }
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.gray_6};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
  position: relative;
`;

export const ErrorText = styled(Typography).attrs({color: 'red', variant: 'h6'})`
  position: absolute;
  bottom: 8px;
  left: 0;
`;

export const MessageText = styled(Typography).attrs({color: 'gray_1', sizeD: 12})``;
