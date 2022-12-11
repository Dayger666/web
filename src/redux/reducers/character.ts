import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IListParams,
  IRickAndMortyResponse,
} from 'interfaces/api-interfaces';
import { ICharacter } from 'interfaces/character-interface';

export interface ICharacterState {
  isLoading: boolean;
  character: Partial<ICharacter>;
  error: Error | string | null,
}

const initialState: ICharacterState = {
  isLoading: false,
  character: {},
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'character',
  initialState,
  reducers: {
    fetchCharacterRequest(state, action: PayloadAction<IListParams>) {
      state.isLoading = true;
    },
    fetchCharacterSuccess(
      state,
      { payload: { data } }: PayloadAction<IRickAndMortyResponse<ICharacter>>,
    ) {
      state.character = data;
      state.isLoading = false;
    },
    fetchCharacterFailed(state, { payload }: PayloadAction<any>) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Actions
export const {
  fetchCharacterRequest,
  fetchCharacterSuccess,
  fetchCharacterFailed,
} = actions;

// Reducer
export default reducer;
