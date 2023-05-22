import styled, {createGlobalStyle} from 'styled-components';
import {Media} from '../../ui-kit/theme/breakpoints';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;

export const RowWrapper = styled.div<{$project?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  ${Media.down.m} {
    flex-direction: ${({$project}) => ($project ? 'column' : 'row')};
  }
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 4px;
  height: max-content;
  background: ${(props) => props.theme.white};
`;

export const TabsWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding-bottom: 20px;
  ::-webkit-scrollbar {
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.blue_2};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blue_1};
    border-radius: 4px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: ${(props) => props.theme.white};
  ${Media.down.m} {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${Media.down.m} {
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const BlockWrapper = styled.div<{$project?: boolean}>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  ${Media.down.m} {
    flex-direction: ${({$project}) => ($project ? 'row' : 'column')};
    flex-wrap: wrap;
    align-items: center;
    button {
      width: 45%;
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const FixedWrapper = styled.article`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${(props) => props.theme.dark_4};
  backdrop-filter: blur(8px);
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 50px;
  margin: 40px auto;
  width: 100%;
  max-width: 600px;
  background: ${(props) => props.theme.white};
  box-shadow: 0 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
  position: relative;
  ${Media.down.m} {
    padding: 40px 30px;
  }
`;

export const CloseBtnWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
