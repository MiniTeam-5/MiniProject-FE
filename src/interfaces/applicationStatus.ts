export interface Leave {
  id: number;
  username: string;
  profile: string;
  type: string;
  status: string;
  startDate: string;
  endDate: string;
}

export interface LeaveResponse {
  status: string;
  msg: string;
  data: Leave[];
}
