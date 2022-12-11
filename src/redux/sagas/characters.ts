import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import { start, done } from 'nprogress';

import {
  fetchCharactersListFailed,
  fetchCharactersListRequest,
  fetchCharactersListSuccess,
} from 'redux/reducers/characters';
import { charactersApi } from 'api';
import { IListParams, IRickAndMortyListResponse } from 'interfaces/api-interfaces';
import { ICharacter } from 'interfaces/character-interface';

function* fetchCharactersList({ payload }: PayloadAction<IListParams>) {
  try {
    start();
    const response: IRickAndMortyListResponse<ICharacter> = yield call(charactersApi.getAll, payload);
    yield put(fetchCharactersListSuccess(response));
    done();
  } catch (error: any) {
    yield put(fetchCharactersListFailed(error));
    message.error(error.message);
  }
}

export default function* charactersSaga() {
  yield takeEvery(fetchCharactersListRequest.type, fetchCharactersList);
}
