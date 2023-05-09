import styled from 'styled-components';
import {Media} from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.white};
  padding: 50px 0;
  ${Media.down.xxs} {
    padding: 40px 0;
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 16px;
  width: 100%;
  ${Media.down.s} {
    flex-direction: column;
    gap: 40px;
  }
`;

export const InfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  h1 {
    max-width: 645px;
    line-height: 72px;
  }
  ${Media.down.m} {
    gap: 20px;
    h1 {
      font-size: 32px;
      line-height: 44px;
    }
    h3 {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  ${Media.down.m} {
   flex-direction: column;
    button {
      width: 100%;
    }
  }
`;

export const Frame = styled.img`
  width: 40%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  ${Media.down.m} {
    width: 50%;
    max-width: 344px;
  }
  ${Media.down.s} {
    width: 100%;
    max-width: 100%;
  }
`;
