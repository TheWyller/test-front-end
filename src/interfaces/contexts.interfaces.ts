import { CharacterSchema, IPageInfo } from "./characterSchema.interfaces";

export interface ICallAllCaracters {
  characterList: CharacterSchema[];
  page: number;
  info: IPageInfo;
  nextPage: () => void;
  previousPage: () => void;
}

export interface ICallCharacters {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  allCharacters: CharacterSchema[];
  setAllCharacters: React.Dispatch<React.SetStateAction<CharacterSchema[]>>;
  sortCharacters: CharacterSchema[];
  setSortCharacters: React.Dispatch<React.SetStateAction<CharacterSchema[]>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  orderById: () => CharacterSchema[];
  orderByName: () => CharacterSchema[];
}

export interface ICallCharacter {
  setCaracterID: React.Dispatch<React.SetStateAction<number>>;
  character: CharacterSchema;
}
