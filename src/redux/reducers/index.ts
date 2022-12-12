import { combineReducers } from '@reduxjs/toolkit';

import characters from './characters';
import character from './character';
import user from './user';

const reducer = combineReducers({
  characters,
  character,
  user,
});

export default reducer;
