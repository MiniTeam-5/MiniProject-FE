import { IAlarm } from './alarm';

export interface ILoginedUser {
  id: number;
  username: string;
  email: string;
  role: 'ROLE_USER' | 'ROLE_ADMIN' | 'ROLE_MASTER';
  profile: string;
  remainDays: number;
  hire_date: string;
}

export interface IAlarmActions {
  id: number;
  alarmList: IAlarm[];
}

export interface IRootState {
  loginedUser: {
    id: string;
  };
  prevAlarms: {
    [key: string]: IAlarm[];
  };
}
