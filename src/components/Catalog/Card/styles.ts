import styled from 'styled-components';

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: ${(props) => props.theme.white};
  border-radius: 8px;
`;

export const RowWrapper = styled.div<{gap: number}>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => props.gap + 'px'};
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Link = styled.a`
  text-decoration: none;
  text-transform: none;
  color: ${(props) => props.theme.blue_7};
  width: max-content;
`;
