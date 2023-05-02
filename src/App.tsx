import Router from './routes/Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle.ts';
import { theme } from './styles/theme.ts';
import { Provider } from 'react-redux';
import store from './store/index.ts';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
