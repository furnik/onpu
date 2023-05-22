import styled, {createGlobalStyle} from 'styled-components';
import {Media} from '../../../ui-kit/theme/breakpoints';
import {fontSizeDesktop} from '../../../ui-kit/Text/styles';
import {Typography} from '../../../ui-kit/Text';

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
  z-index: 3;
  background: ${(props) => props.theme.dark_4};
  backdrop-filter: blur(8px);
  overflow-y: auto;
`;

export const Description = styled(Typography)`
  padding: 0 40px;
  ${Media.down.s} {
    padding: 0;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% + 100px);
  height: 44px;
  background: ${(props) => props.theme.gray_5};
  ${Media.down.m} {
    width: calc(100% + 60px);
  }
`;

export const AddInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
  position: relative;
`;

export const GhostButton = styled.button<{isAbsolute?: boolean}>`
  width: max-content;
  height: max-content;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: ${fontSizeDesktop({sizeD: 16})};
  color: ${(props) => props.theme.blue_7};
  display: flex;
  align-items: center;
  ${({isAbsolute}) => (isAbsolute && 'position: absolute; right: 14px; top: 10px;')};
`;

export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;
