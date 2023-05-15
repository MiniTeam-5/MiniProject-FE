import { axiosInstance } from './instance';
import { LeaveResponse } from '../interfaces/applicationStatus';
import { ApprovalResponse } from '../interfaces/applicationStatus';

export const fetchLeaveList = async () => {
  try {
    const response = await axiosInstance().get<LeaveResponse>('/admin/leave');
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const approveLeave = async (id: number, status: string) => {
  const response = await axiosInstance().post<ApprovalResponse>('/admin/approve', {
    id,
    status
  });
  return response.data;
};
