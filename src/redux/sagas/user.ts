import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';

import {
  fetchUserFailed,
  fetchUserRequest,
  fetchUserSuccess,
} from 'redux/reducers/user';
import { userApi } from 'api';
import { IListParams, IListResponse } from 'interfaces/api-interfaces';
import { IUser } from 'interfaces/user-interface';

function* fetchUser({ payload }: PayloadAction<IListParams>) {
  try {
    const response: IListResponse<IUser> = yield call(userApi.getOne, payload);
    yield put(fetchUserSuccess(response));
  } catch (error: any) {
    yield put(fetchUserFailed(error));
    message.error(error.message);
  }
}

export default function* characterSaga() {
  yield takeEvery(fetchUserRequest.type, fetchUser);
}
