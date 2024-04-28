import { IUserList } from '../../interfaces/user-list.interface';

export interface IUserListResponse {
  data: {
    UserList: IUserList[];
    data?: any[];
    pagination: IPagination | null;
  };
  message: string | null;
  success: boolean | null;
}

export interface IPagination {
  count: number;
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface IError {
  data: any[];
  message: null;
  success: null;
  totalStock: null;
}
