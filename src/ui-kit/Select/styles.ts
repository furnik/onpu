import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.gray_2};
  color: ${(props) => props.theme.gray_1};
  padding: 0 14px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DefaultButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.blue_2};
  color: ${(props) => props.theme.dark_2};
  padding: 0 14px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const DefaultLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const ListWrapper = styled.div`
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.blue_2};
  box-shadow: 0 4px 10px rgba(26, 26, 27, 0.04);
  border-radius: 8px;
  width: 100%;
  padding: 12px;
  overflow-y: scroll;
  max-height: 340px;
  position: absolute;
  z-index: 3;
  top: 48px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.blue_2};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blue_1};
    border-radius: 4px;
  }
`;
export const DefaultListWrapper = styled.div`
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.gray_3};
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 8px;
  width: 100%;
  overflow-y: auto;
  max-height: 340px;
  position: absolute;
  z-index: 3;
  top: 48px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.blue_2};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.blue_1};
    border-radius: 4px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 44px;
  padding: 0 10px;
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.theme.blue_9};
  }
`;
