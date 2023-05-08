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
