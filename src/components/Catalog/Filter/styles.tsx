import styled from 'styled-components';
import {fontSizeDesktop} from '../../../ui-kit/Text/styles';
import {Media} from '../../../ui-kit/theme/breakpoints';

export const Wrapper = styled.aside`
  display: flex;
  width: 100%;
  max-width: 396px;
  ${Media.down.m} {
    max-width: 50%;
  }
  ${Media.down.s} {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.blue_7};
  font-size: 16px;
  font-family: Inter, sans-serif;
  color: ${(props) => props.theme.blue_6};
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  display: none;
  ${Media.down.m} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterWrapper = styled.div<{active?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 396px;
  height: max-content;
  border-radius: 8px;
  padding: 20px;
  background: ${(props) => props.theme.white};
  ${Media.down.m} {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100vw;
    height: 100vh;
    z-index: 4;
    display: ${({active}) => (active ? 'flex' : 'none')};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const GhostButton = styled.button`
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
  gap: 6px;
  svg {
    display: none;
  }
  ${Media.down.m} {
    svg {
      display: flex;
    }
  }
`;

export const Line = styled.div<{top?: number}>`
  width: 100%;
  border: 1px solid ${(props) => props.theme.blue_2};
  margin-top: ${({top}) => (top ? top + 'px' : 0)};
`;

export const SpecialityList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  max-height: 400px;
  overflow-y: auto;
  gap: 20px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.blue_2};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blue_1};
    border-radius: 4px;
  }
  ${Media.down.m} {
    max-height: 100%;
  }
`;

export const SpecialityItem = styled.li`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const LabelBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
