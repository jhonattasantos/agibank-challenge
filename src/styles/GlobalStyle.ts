import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --body-bg:#F2F2F2;
    --text-color: #1e1e1e;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto";
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  
  ul,
  li {
    list-style: none;
  }
  #root{
    height: 100vh;
  }

  body{
    background-color: var(--body-bg);
  }
`;
