import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  button {
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    border-radius: 5px;
    font-weight: 700;
  }

  a {
    cursor: pointer;
    text-decoration: 'none';
    color:${colors.primaryColor};
  }

  ul {
    list-style: 'none';
  }

`;

export const Container = styled.section`
  max-width: 40em;
  text-align: center;
  background: #fff;
  margin: 0 auto;
  padding: 30px 10px;
  margin-top: 40px;
  border-radius: 5px;
`;
