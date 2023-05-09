import styled from 'styled-components';
import {Media} from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  padding: 64px;
  margin: 50px 0;
  border-radius: 16px;
  background: ${(props) => props.theme.white};
  ${Media.down.l} {
    padding: 40px;
  }
  ${Media.down.m} {
    margin: 40px 0;
  }
  ${Media.down.s} {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    button {
      width: 100%;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
