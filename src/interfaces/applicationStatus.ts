export interface Leave {
  id: number;
  userId: number;
  username: string;
  profile: string | null;
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

export interface ApprovalRequest {
  id: number;
  status: 'APPROVAL' | 'REJECTION';
}

export interface ApprovalResponse {
  status: number;
  msg: string;
  data: {
    remainDays: number;
  };
}
