import { IApiResponse } from '../../interfaces/api-response.interface';
import {
  IAddUser,
  IUserImpression,
} from '../../interfaces/user-impression.interface';
import fetcher from '../lib/axios';

export const addUserImpression = async (
  userData: IAddUser
): Promise<IApiResponse<IUserImpression> | null> => {
  try {
    const { data }: { data: IApiResponse<IUserImpression> } = await fetcher({
      url: '/user_impression',
      method: 'POST',
      data: userData,
    });
    return data;
  } catch (error) {
    return null;
  }
};
