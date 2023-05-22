import styled from 'styled-components';
import {Typography} from '../../ui-kit/Text';
import {Media} from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 0 50px;
`;

export const Title = styled(Typography)`
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.article`
  display: flex;
  width: 100%;
  gap: 18px;
  margin-top: 40px;
  height: max-content;
  ${Media.down.m}{
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  width: 50%;
  height: max-content;
  padding: 16px 24px 16px 0;
  ${Media.down.m}{
    width: 100%;
  }
`;

export const InfoReverse = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const InfoBlock = styled.div<{$active?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0 16px 24px;
  border-left: 4px solid ${({$active, theme}) => ($active ? theme.blue_1 : theme.blue_2)};
`;

export const InfoBanner = styled.img`
  width: 50%;
  max-width: 600px;
  max-height: 426px;
  object-fit: cover;
  aspect-ratio: 600 / 426;
  border-radius: 8px;
  ${Media.down.m}{
    width: 100%;
    max-width: 100%;
  }
`;

export const InfoLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.blue_1};
  margin-top: 18px;
  border-bottom: 2px solid ${(props) => props.theme.blue_1};
`;
