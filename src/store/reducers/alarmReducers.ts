import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';
import { IAlarm, IPrevAlarmsState } from '../../interfaces/alarm';

export const setAlarmList = createAction<{ id: number; alarmList: IAlarm[] }>('prevAlarms/setAlarmList');

const initialState: IPrevAlarmsState = {};
const prevAlarms = createReducer(initialState, (builder) => {
  builder.addCase(setAlarmList, (state, action: PayloadAction<{ id: number; alarmList: IAlarm[] }>) => {
    const { id, alarmList } = action.payload;
    state[id] = alarmList;
  });
});

export default prevAlarms;
