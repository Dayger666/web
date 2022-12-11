import { RootState } from 'redux/store';

export const selectCharacterIsLoading = (state: RootState) => state.character.isLoading;
export const selectCharacter = (state: RootState) => state.character.character;
