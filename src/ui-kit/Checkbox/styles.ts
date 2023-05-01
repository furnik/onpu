import styled from 'styled-components';

export const StyledCheckbox = styled.button<{$active: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  padding: 0;
  background: ${({theme, $active}) => ($active ? theme.blue_8 : theme.white)};
  border: 1px solid ${({theme, $active}) => ($active ? theme.blue_7 : theme.gray_2)};
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  & > svg {
    opacity: ${({$active}) => ($active ? 1 : 0)};
    transition: opacity 0.3s;
    border-radius: 4px;
  }
  &:hover {
    background: ${({theme}) => theme.blue_8};
    border: 1px solid ${({theme}) => theme.blue_7};
  }
`;

export const Label = styled.div`
  position: relative;
  max-width: 24px;
  z-index: 2;
`;
