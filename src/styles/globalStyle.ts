import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
${normalize}

button {
  line-height: 1.5;
  background:transparent;
  border:none;
  outline:none;
  cursor:pointer;
}
input {
  outline:none;
  border:none;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color:inherit;
}
body {font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  background-color: #ddd
}
`;
