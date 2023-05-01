import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.white};
  height: 75px;
  width: 100%;
`;

export const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const MenuWrapper = styled.article`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.black};
  font-size: 16px;
  font-family: Inter, sans-serif;
`;
