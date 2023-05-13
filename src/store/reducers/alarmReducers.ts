import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';
import { IPrevAlarmsState } from '../../interfaces/alarm';
import { IAlarmActions } from '../../interfaces/store';

export const setAlarmList = createAction<IAlarmActions>('prevAlarms/setAlarmList');

const initialState: IPrevAlarmsState = {};
const prevAlarms = createReducer(initialState, (builder) => {
  builder.addCase(setAlarmList, (state, action: PayloadAction<IAlarmActions>) => {
    const { id, alarmList } = action.payload;
    state[id] = alarmList;
  });
});

export default prevAlarms;
