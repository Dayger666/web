import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import { start, done } from 'nprogress';

import {
  fetchCharacterFailed,
  fetchCharacterRequest,
  fetchCharacterSuccess,
} from 'redux/reducers/character';
import { charactersApi } from 'api';
import { IListParams, IRickAndMortyResponse } from 'interfaces/api-interfaces';
import { ICharacter } from 'interfaces/character-interface';

function* fetchCharacter({ payload }: PayloadAction<IListParams>) {
  try {
    start();
    console.info(payload);
    const response: IRickAndMortyResponse<ICharacter> = yield call(charactersApi.getOne, payload);
    yield put(fetchCharacterSuccess(response));
    done();
  } catch (error: any) {
    yield put(fetchCharacterFailed(error));
    message.error(error.message);
  }
}

export default function* characterSaga() {
  yield takeEvery(fetchCharacterRequest.type, fetchCharacter);
}
