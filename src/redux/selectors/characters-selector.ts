import { RootState } from 'redux/store';

export const selectCharactersIsLoading = (state: RootState) => state.characters.isLoading;
export const selectCharactersList = (state: RootState) => state.characters.list;
export const selectCharactersCount = (state: RootState) => state.characters.count;
