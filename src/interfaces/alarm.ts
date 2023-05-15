export interface IAlarmProps {
  data: {
    prevAlarmList: IAlarm[];
    newAlarmList: IAlarm[];
  };
  handleCloseAlarm: () => void;
}
export interface IPrevAlarmsState {
  [id: number]: IAlarm[];
}

export interface IAlarmList {
  prevAlarmList: IAlarm[];
  newAlarmList: IAlarm[];
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
  leaveId: number;
}
export interface IAlarmCardProps {
  alarmStatus: 'new' | 'prev';
  data: IAlarm;
}
