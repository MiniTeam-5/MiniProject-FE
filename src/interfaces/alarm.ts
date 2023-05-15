export interface IAlarmProps {
  data: IAlarm[];
  handleCloseAlarm: () => void;
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
