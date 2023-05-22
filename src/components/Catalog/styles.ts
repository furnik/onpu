import styled from 'styled-components';
import {Media} from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 0;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NoDataWrapper = styled.div<{$ua: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 100px;
  width: 100%;
  svg {
    margin-bottom: 12px;
  }
  h6 {
    max-width: ${({$ua}) => ($ua ? '350px' : 'max-content')};
  }
  ${Media.down.m} {
    margin-top: 40px;
  }
`;
