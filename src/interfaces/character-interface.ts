enum STATUSES {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}

enum GENDERS {
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown',
}

interface ILink {
  name: string,
  url: string,
}

export interface ICharacter {
  id: number,
  name: string,
  status: STATUSES,
  species: string,
  type: string,
  gender: GENDERS,
  origin: ILink,
  location: ILink,
  image: string,
  episode: string[],
  url: string,
  created: string,
}
