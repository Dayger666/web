import { combineReducers } from '@reduxjs/toolkit';

import characters from './characters';
import character from './character';

const reducer = combineReducers({
  characters,
  character,
});

export default reducer;
