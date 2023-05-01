import styled from 'styled-components';
import {Media} from '../../../ui-kit/theme/breakpoints';

export const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.dark_3};
  padding: 60px 0 30px;
`;

export const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${Media.down.m} {
    flex-direction: column;
    align-items: center;
    max-width: 260px;
    margin: 0 auto;
  }
`;

export const CopyrightWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 30px;

  ${Media.down.m} {
    gap: 30px;
    margin: 30px auto 0;
    max-width: 344px;
    h6 {
      text-align: center;
      font-size: 12px;
    }
  }
  ${Media.down.xxs} {
    max-width: 100%
  }
`;

export const InfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${Media.down.m} {
    align-items: center;
    
    h5 {
      text-align: center;
    }
  }
`;

export const LinkWrapper = styled.article`
  display: flex;
  gap: 50px;

  ${Media.down.m} {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 30px auto 0;
  }
`;

export const LinkText = styled.a`
  text-transform: none;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  font-size: 16px;
  line-height: 24px;
  font-family: Inter, sans-serif;
`;
