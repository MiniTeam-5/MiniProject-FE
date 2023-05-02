import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
${normalize}

button {
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
body {
  font-family: 'Pretendard', sans-serif;
  background-color: #ddd
}
`;
