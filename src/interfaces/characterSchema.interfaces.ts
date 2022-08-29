export interface CharacterSchema {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin: OriginSchema;
  location?: LocationSchema;
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface LocationSchema {
  name: string;
  url: string;
}

export interface OriginSchema {
  name: string;
  url: string;
}

export interface IPageInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ICard extends CharacterSchema {
  id: number;
  status: string;
  name: string;
  image: string;
  origin: OriginSchema;
  gender: string;
  species: string;
}
