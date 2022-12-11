export interface IListParams {
  page?: number;
  id?: string,
  [key: string]: any;
}

export interface IRickAndMortyResponseInfo {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null,
}

export interface IRickAndMortyListResponse<T> {
  data: {
    info: IRickAndMortyResponseInfo,
    results: T[];
  }
}

export interface IRickAndMortyResponse<T> {
  data: T
}
