import styled from 'styled-components';
import {Typography} from '../Text';

export const StyledInput = styled.input<{$error: boolean}>`
  width: 320px;
  height: 44px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${({theme, $error}) => ($error ? theme.red : theme.gray_2)};
  color: ${({theme, $error}) => ($error ? theme.red : theme.dark)};
  padding: 0 14px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
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

export const SearchStyledInput = styled.input`
  width: 460px;
  height: 48px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${({theme}) => theme.gray_2};
  color: ${({theme}) => theme.dark_2};
  padding: 0 44px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
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
  width: 100%;
  position: relative;
`;

export const SearchLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  position: relative;
  & > svg {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }
`;

export const ErrorText = styled(Typography).attrs({color: 'red', variant: 'h6'})`
  position: absolute;
  bottom: -20px;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;
