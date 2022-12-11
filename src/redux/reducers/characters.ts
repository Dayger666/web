import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IListParams,
  IRickAndMortyListResponse,
  IRickAndMortyResponseInfo,
} from 'interfaces/api-interfaces';
import { ICharacter } from 'interfaces/character-interface';

export interface ICharactersState extends Partial<IRickAndMortyResponseInfo>{
  isLoading: boolean;
  list: ICharacter[];
  error: Error | string | null,
}

const initialState: ICharactersState = {
  isLoading: false,
  list: [],
  count: 0,
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    fetchCharactersListRequest(state, action: PayloadAction<IListParams>) {
      state.isLoading = true;
    },
    fetchCharactersListSuccess(
      state,
      { payload: { data: { results, info: { count } } } }: PayloadAction<IRickAndMortyListResponse<ICharacter>>,
    ) {
      state.list = results;
      state.count = count;
      state.isLoading = false;
    },
    fetchCharactersListFailed(state, { payload }: PayloadAction<any>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Actions
export const {
  fetchCharactersListRequest,
  fetchCharactersListSuccess,
  fetchCharactersListFailed,
} = actions;

// Reducer
export default reducer;
