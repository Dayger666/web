export interface IUser {
  id: string,
  email: string,
  bio: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface ICreateUser {
  email: IUser['email'],
  password: string,
}
