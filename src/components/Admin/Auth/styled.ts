import styled from 'styled-components';
import {Media} from '../../../ui-kit/theme/breakpoints';
import {fontSizeDesktop} from '../../../ui-kit/Text/styles';

export const FormWrapper = styled.div`
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

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
