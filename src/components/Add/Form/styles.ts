import styled, {createGlobalStyle} from 'styled-components';
import {Media} from '../../../ui-kit/theme/breakpoints';

export const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Wrapper = styled.article`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${(props) => props.theme.dark_4};
  backdrop-filter: blur(8px);
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 50px;
  margin: 40px auto;
  width: 100%;
  max-width: 600px;
  background: ${(props) => props.theme.white};
  box-shadow: 0 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
  position: relative;
  ${Media.down.m} {
    padding: 40px 30px;
  }
`;

export const CloseBtnWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
