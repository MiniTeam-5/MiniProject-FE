import { axiosInstance } from './instance';
import { ApprovalResponse, LeaveResponse } from '../interfaces/applicationStatus';

export const fetchLeaveList = async () => {
  try {
    const response = await axiosInstance().get<LeaveResponse>('/admin/leave');
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const approveLeave = async (data: { id: number; status: string }) => {
  const response = await axiosInstance().post<ApprovalResponse>('/admin/approve', data);
  return response.data;
};
