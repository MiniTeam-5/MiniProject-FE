import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPrevAlarmsState } from '../../interfaces/alarm';
import { IAlarmActions, IRootState } from '../../interfaces/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const initialState: IPrevAlarmsState = {};
const alarmSlice = createSlice({
  name: 'prevAlarms',
  initialState,
  reducers: {
    setAlarmList: (state, action: PayloadAction<IAlarmActions>) => {
      const { id, alarmList } = action.payload;
      state[id] = alarmList;
    }
  }
});
export const { setAlarmList } = alarmSlice.actions;

export function useAlarm() {
  const data = useSelector((state: IRootState) => state.prevAlarms);
  const dispatch = useDispatch();

  return { data, dispatch };
}

export default alarmSlice.reducer;
