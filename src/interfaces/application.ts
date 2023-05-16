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
  id: number;
  username: string;
  type: string;
  status: string;
  startDate?: string;
  endDate?: string;
}

export interface CancelApplication {
  id: number;
  type: string;
  startDate: string;
  endDate: string;
}

export interface ApplicationStatusProps {
  applyType: string;
  annualList?: ApplicationList[];
  dutyList?: ApplicationList[];
}
