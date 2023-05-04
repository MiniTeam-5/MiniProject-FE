export interface pageTitleProps {
  title: string;
}

export interface ISchedule {
  id: number;
  status: 'waiting' | 'approved' | 'rejected';
  type: 'duty' | 'annual';
  start_date: string;
  end_date: string;
  username: string;
}

export interface IUseScheduleQuery {
  data: ISchedule[];
  status: number;
  msg: string;
}
