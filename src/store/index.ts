import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import loginedUserReducer from './reducers/userReducers';
const logger = createLogger();

const rootReducer = combineReducers({
  loginedUser: loginedUserReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
