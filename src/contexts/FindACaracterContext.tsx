import { createContext, useEffect, useState } from "react";
import { CharacterSchema } from "../interfaces/characterSchema.interfaces";
import { ICallCharacter } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";
import api from "../services/api";

export const FindACaracterContext = createContext<ICallCharacter>(
  {} as ICallCharacter
);

export const FindACaracterProvider = ({ children }: Ichildren) => {
  const [caracterID, setCaracterID] = useState<number>(1);
  const [character, setCharacter] = useState<CharacterSchema>(
    {} as CharacterSchema
  );

  useEffect(() => {
    api
      .get(`/${caracterID}`)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((err) => console.error(err));
  }, [caracterID]);

  return (
    <FindACaracterContext.Provider
      value={{
        setCaracterID,
        character,
      }}
    >
      {children}
    </FindACaracterContext.Provider>
  );
};
