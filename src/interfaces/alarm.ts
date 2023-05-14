import { IAlarmActions } from './store';
export interface IAlarmProps {
  role: 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_MASTER';
  handleCloseAlarm: ({ id, alarmList }: IAlarmActions) => void;
}
export interface IPrevAlarmsState {
  [id: number]: IAlarm[];
}

export interface IAlarm {
  id: number;
  username: string;
  type: 'ANNUAL' | 'DUTY';
  startDate: string;
  endDate: string;
  usingDays: number;
  status: 'APPROVAL' | 'REJECTION';
  createdAt: Date;
}
export interface IAlarmCardProps {
  data: IAlarm;
}
