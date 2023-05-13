import { IAlarmActions } from './store';
export interface IAlarmProps {
  handleCloseAlarm: ({ id, alarmList }: IAlarmActions) => void;
}
export interface IPrevAlarmsState {
  [id: number]: IAlarm[];
}

export interface IAlarm {
  id: number;
  content: string;
  createdAt: string;
}
export interface IAlarmCardProps {
  data: IAlarm;
}
