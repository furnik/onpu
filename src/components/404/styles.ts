import styled from 'styled-components';
import {Media} from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 150px 0;
  background: ${(props) => props.theme.white};
  ${Media.down.m} {
    padding: 70px 0;
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${Media.down.m} {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 480px;
  aspect-ratio: 480 / 366;
  ${Media.down.m} {
    max-width: 152px;
    aspect-ratio: 152 / 124;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    line-height: 72px;
    max-width: 560px;
  }
  h3 {
    max-width: 480px;
  }
  ${Media.down.m} {
    h1 {
      max-width: 100%;
      line-height: 44px;
    }
    h3 {
      max-width: 100%;
    }
  }
`;
