export interface pageTitleProps {
  title: string;
}

export interface ISchedule {
  userId: number;
  status: 'WAITING' | 'APPROVED' | 'REJECTED';
  type: 'DUTY' | 'ANNUAL';
  startDate: string;
  endDate: string;
  username: string;
}

export interface IUseScheduleQuery {
  data: ISchedule[];
  status: number;
  msg: string;
}

export interface IApplySchedule {
  type: 'ANNUAL' | 'DUTY';
  startDate: string;
  endDate: string;
}
