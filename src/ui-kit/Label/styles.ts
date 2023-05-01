import styled from 'styled-components';

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  background: ${(props) => props.theme.gray_5};
  border-radius: 16px;
  color: ${(props) => props.theme.blue_6};
  font-weight: 500;
  font-size: 14px;
  width: max-content;
  height: 24px;
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: ${(props) => props.theme.blue_6};
  border-radius: 100%;
`;
