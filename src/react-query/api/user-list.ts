import { IUserList } from '../../interfaces/user-list.interface';
import fetcher from '../lib/axios';
import { IError, IUserListResponse } from './interfaces';

export const getUserList = async (): Promise<IUserList[] | IError> => {
  try {
    const { data }: { data: IUserListResponse } = await fetcher({
      url: '/user_list',
      method: 'GET',
    });
    return data?.data?.UserList;
  } catch (error) {
    return {
      data: [],
      message: null,
      success: null,
      totalStock: null,
    };
  }
};
