export interface UserApplication {
  id: number;
  userId: string;
  username: string;
  type: string;
  status: string;
  startDate: string;
  endDate: string;
  profile: string | null;
}

export interface ApplicationList {
  username: string;
  type: string;
  status: string;
  start_date?: string;
  end_date?: string;
}

export interface ApplicationStatusProps {
  title: string;
  annualList?: ApplicationList[];
  dutyList?: ApplicationList[];
}
