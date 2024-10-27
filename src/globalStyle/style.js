// src/GlobalStyle.js
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    background-color: #eee5e9;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}
`;

export default GlobalStyle;


export const GlobalButtonLayout = styled.button`
  width: 200px;
  height: 50px;
  padding: 12px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.3s ease;

  &.greenBtn {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }
  }

  &.redBtn {
    background-color: #a83232;
    color: white;

    &:hover {
      background-color: #9f2929;
    }
  }

  &.yellowBtn {
    background-color: #ffbe55;
    color: #fff;

    &:hover {
      background-color: #ffab33;
    }
  }

  &.whiteBtn {
    background-color: #e0e0e0;
    color: #000;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

