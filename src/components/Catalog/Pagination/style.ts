import styled from 'styled-components';
import Paginate from 'react-paginate';

export const Wrapper = styled.div`
  display: flex;
  gap: 2px;
  width: 100%;
  overflow-x: auto;
`;

export const Paginator = styled(Paginate)`
  display: flex;
  margin: 0 auto;
  gap: 2px;
  .previous {
    display: none;
  }
  .next {
    display: none;
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    background: transparent;
    color: ${({theme}) => theme.gray_1};
    &:hover {
      background: ${({theme}) => theme.gray_5};
    }
    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .selected {
    color: ${({theme}) => theme.blue_6};
    background: ${({theme}) => theme.gray_5};
  }
`;
