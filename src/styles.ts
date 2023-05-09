import {createGlobalStyle} from 'styled-components';
import {theme} from './ui-kit/theme/palette';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    scroll-behavior: smooth;
  }
  body {
    background: ${theme.light.dark_3};
    scroll-behavior: smooth;
  }
  a {
    font-family: Inter, sans-serif;
    text-decoration: none;
    width: max-content;
  }
`;
