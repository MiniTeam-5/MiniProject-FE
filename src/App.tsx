import Router from './routes/Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle.ts';
import { theme } from './styles/theme.ts';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
