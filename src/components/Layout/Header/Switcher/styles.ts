import styled from 'styled-components';

export const Button = styled.button<{$active: boolean}>`
  width: max-content;
  height: max-content;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 150%;
  color: ${({theme, $active}) => ($active ? theme.dark : theme.gray_6)};
  cursor: pointer;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
`;

export const Line = styled.div`
  display: flex;
  height: 20px;
  border-right: 1px solid ${(props) => props.theme.dark};
`;
