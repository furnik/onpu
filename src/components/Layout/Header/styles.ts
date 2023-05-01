import styled from 'styled-components';
import {Media} from '../../../ui-kit/theme/breakpoints';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.white};
  height: 75px;
  width: 100%;
  ${Media.down.xxs} {
    height: 68px;
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const MenuWrapper = styled.article`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 0 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
  ${Media.down.m} {
    gap: 10px;
    justify-content: space-between;
    width: 100%;
  }
  ${Media.down.xxs} {
    display: none;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.black};
  font-size: 16px;
  font-family: Inter, sans-serif;
  white-space: nowrap;
`;
