import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import loginedUserReducer from './reducers/userReducers';
import prevAlarmsReducer from './reducers/alarmSlice';
import userEmailReducer from './reducers/rememberEmailSlice';
// @ts-ignore
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer';

const logger = createLogger();

const persistConfig = {
  key: 'alarmData',
  storage
};

const persistUserConfig = {
  key: 'userEmail',
  storage
};

const persistedReducer = persistReducer(persistConfig, prevAlarmsReducer);
const rememberReducer = persistReducer(persistUserConfig, userEmailReducer);

const rootReducer = combineReducers({
  loginedUser: loginedUserReducer,
  prevAlarms: persistedReducer,
  rememberEmail: rememberReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
