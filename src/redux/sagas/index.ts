import { all } from 'redux-saga/effects';

import charactersSaga from './characters';
import characterSaga from './character';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    charactersSaga(),
    characterSaga(),
    userSaga(),
  ]);
};
