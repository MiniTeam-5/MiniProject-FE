import Router from './routes/Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle.ts';
import { theme } from './styles/theme.ts';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const queryClient = new QueryClient();
const persistor = persistStore(store);
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
