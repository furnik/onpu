import styled from 'styled-components';
import {Media} from '../theme/breakpoints';

export const Container = styled.div<{$direction: 'column' | 'row'}>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  width: 100%;
  max-width: 1440px;
  padding: 0 60px;
  margin: 0 auto;
  ${Media.down.m} {
    padding: 0 32px;
  }
  ${Media.down.xxs} {
    padding: 0 16px;
  }
`;
