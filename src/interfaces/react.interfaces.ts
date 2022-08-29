import { ReactNode } from "react";
import { CharacterSchema } from "./characterSchema.interfaces";

export interface Ichildren {
  children: ReactNode;
}

export interface ICharacterList {
  characterList: CharacterSchema[];
}

export interface ICharacter {
  character: CharacterSchema;
}
