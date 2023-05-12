import { createAction, createReducer } from '@reduxjs/toolkit';
import { ILoginedUser } from '../../interfaces/store';

export const setAlarmList = createAction('prevAlarms/setAlarmList');

const prevAlarms = createReducer(
  {},
  {
    [setAlarmList]: (action) => {
      return {
        ...action.payload
      };
    }
  }
);

export default prevAlarms;
