import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IListParams,
  IListResponse,
} from 'interfaces/api-interfaces';
import { IUser } from 'interfaces/user-interface';

export interface IUserState {
  isLoading: boolean,
  data: IUser | null,
  error: Error | string | null,
}

const initialState: IUserState = {
  isLoading: false,
  data: null,
  error: null,
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserRequest(state, action: PayloadAction<IListParams>) {
      state.isLoading = true;
    },
    fetchUserSuccess(
      state,
      { payload: { data } }: PayloadAction<IListResponse<IUser>>,
    ) {
      state.data = data;
      state.isLoading = false;
    },
    fetchUserFailed(state, { payload }: PayloadAction<any>) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

// Actions
export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailed,
} = actions;

// Reducer
export default reducer;
