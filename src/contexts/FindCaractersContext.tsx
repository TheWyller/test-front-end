import { createContext, useEffect, useState } from "react";
import { CharacterSchema } from "../interfaces/characterSchema.interfaces";
import { ICallCharacters } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";
import api from "../services/api";

export const FindCaractersContext = createContext<ICallCharacters>(
  {} as ICallCharacters
);

export const FindCaractersProvider = ({ children }: Ichildren) => {
  const [search, setSearch] = useState<string>("");
  const [allCharacters, setAllCharacters] = useState<CharacterSchema[]>(
    [] as CharacterSchema[]
  );
  const [sortCharacters, setSortCharacters] = useState<CharacterSchema[]>(
    [] as CharacterSchema[]
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (search.length !== 0) {
      api
        .get(`/?name=${search}`)
        .then((res) => {
          setSortCharacters(res.data.results);
        })
        .catch((err) => console.error(err));
    }
  }, [search, sortCharacters]);

  const orderByName = () => {
    return sortCharacters.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };

  const orderById = () => {
    return sortCharacters.sort((a, b) => a.id - b.id);
  };

  return (
    <FindCaractersContext.Provider
      value={{
        search,
        setSearch,
        allCharacters,
        setAllCharacters,
        sortCharacters,
        setSortCharacters,
        isChecked,
        setIsChecked,
        orderByName,
        orderById,
      }}
    >
      {children}
    </FindCaractersContext.Provider>
  );
};
