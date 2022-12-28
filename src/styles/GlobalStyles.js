import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }

  button {
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    border-radius: 5px;
    font-weight: 700;
  }

  a {
    cursor: pointer;
    text-decoration: 'none';
    color:${primaryColor};
  }

  ul {
    list-style: 'none';
  }

`;

export const Container = styled.section`
  max-width: 40em;
  background: #fff;
`;
