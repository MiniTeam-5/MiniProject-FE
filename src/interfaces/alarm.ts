export interface IAlarmProps {
  handleCloseAlarm: () => void;
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
