import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import loginedUserReducer from './reducers/userReducers';
import prevAlarmsReducer from './reducers/alarmSlice';
// @ts-ignore
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer';

const logger = createLogger();

const persistConfig = {
  key: 'alarmData',
  storage
};

const persistedReducer = persistReducer(persistConfig, prevAlarmsReducer);

const rootReducer = combineReducers({
  loginedUser: loginedUserReducer,
  prevAlarms: persistedReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
