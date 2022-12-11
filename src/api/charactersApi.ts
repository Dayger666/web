import {
  IListParams,
  IRickAndMortyListResponse,
  IRickAndMortyResponse,
} from 'interfaces/api-interfaces';
import { ICharacter } from 'interfaces/character-interface';
import { ROUTES } from 'utils/routes';

import axiosClient from './axiosClient';

const charactersApi = {
  getAll(params: IListParams): Promise<IRickAndMortyListResponse<ICharacter>> {
    const url = ROUTES.CHARACTER.path;
    const client = axiosClient.getRickAndMortyClient();

    return client.get(url, {
      params,
    });
  },

  getOne({ id }: IListParams): Promise<IRickAndMortyResponse<ICharacter>> {
    const url = ROUTES.CHARACTER.getRoute(id).path;
    console.info(url);
    const client = axiosClient.getRickAndMortyClient();

    return client.get(url);
  },
};

export default charactersApi;
