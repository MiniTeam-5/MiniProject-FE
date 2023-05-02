import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
