import styled from 'styled-components';
import {Typography} from '../../../ui-kit/Text';
import {Media} from '../../../ui-kit/theme/breakpoints';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  gap: 40px;
  ${Media.down.m} {
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    h6 {
      display: none;
    }
    & > div:nth-child(3) {
      display: none;
    }
  }
`;

export const TabletSearchWrapper = styled.div`
  display: none;
  ${Media.down.m} {
    display: flex;
    width: 100%;
    margin-top: 40px;
    gap: 16px;
  }
  ${Media.down.s} {
    flex-direction: column-reverse;
  }
`;

export const ResultBlock = styled.div`
  display: none;
  ${Media.down.m} {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 10px;
  }
  ${Media.down.s} {
    width: 100%;
  }
`;

export const ResultText = styled(Typography)`
  min-width: 372px;
  ${Media.down.m} {
    min-width: max-content;
    max-width: max-content;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  ${Media.down.m} {
    flex-direction: column;
    gap: 20px;
    & > aside {
      display: none;
    }
  }
`;
