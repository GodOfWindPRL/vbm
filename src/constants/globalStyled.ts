import { createGlobalStyle } from "styled-components";
import { breakpointsMedia, breakpointsMedias } from "./breakpoints";
import configColor from "./configColor";

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
  #root {
    min-height: 100vh;
    min-width: 100%;
  }
  :root{
    font-size:13px;
  }
  body {
    font-size: 13px;
    line-height: 1.17;
    font-family: 'Judson';
    background: #1E1E1E;
  }
  .container {
    width: 100%;
    padding: 0 40px;
    max-width: 1480px;
    ${breakpointsMedias.max1199}{
      padding: 0 24px;
    }
    ${breakpointsMedias.max767}{
      padding: 0 16px;
    }
  }
    .color-primary {
      color: ${configColor.yellow};
    }
    .text-center {
      text-align: center;
    }
    .text-uppercase {
      text-transform: uppercase;
    }
    .appear-left {
      transition: 2s ease-in-out;
      opacity: 0;
      transform: translate(-50%, 10%);
    }
    .appear-right {
      transition: 2s ease-in-out;
      opacity: 0;
      transform: translate(50%, 10%);
    }
    .appear-left-active {
      opacity: 1 !important;
      transform: translate(0%, 0) !important;
    }
`;
