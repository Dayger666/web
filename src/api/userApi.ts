import { IListParams, IListResponse } from 'interfaces/api-interfaces';
import { IUser, ICreateUser } from 'interfaces/user-interface';
import { ROUTES } from 'utils/routes';

import axiosClient from './axiosClient';

const userApi = {
  create(body: ICreateUser): Promise<IListResponse<IUser>> {
    const url = ROUTES.USERS.path;
    const client = axiosClient.getRickAndMortyClient();

    return client.post(url, body);
  },

  getOne({ id }: IListParams): Promise<IListResponse<IUser>> {
    const url = ROUTES.USERS.getRoute(id).path;
    const client = axiosClient.getClient();

    return client.get(url);
  },
};

export default userApi;
