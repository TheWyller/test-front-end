import { createContext, useEffect, useState } from "react";
import {
  CharacterSchema,
  IPageInfo,
} from "../interfaces/characterSchema.interfaces";
import { ICallAllCaracters } from "../interfaces/contexts.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";
import api from "../services/api";

export const CallAllCaractersContext = createContext<ICallAllCaracters>(
  {} as ICallAllCaracters
);

export const CallAllCaractersProvider = ({ children }: Ichildren) => {
  const [characterList, setCharacterList] = useState<CharacterSchema[]>(
    [] as CharacterSchema[]
  );
  const [page, setPage] = useState<number>(1);
  const [info, setInfo] = useState<IPageInfo>({} as IPageInfo);

  useEffect(() => {
    api
      .get(`?page=${page}`)
      .then((res) => {
        setCharacterList(res.data.results);
        setInfo(res.data.info);
        return res;
      })
      .catch((err) => console.error(err));
  }, [page]);

  const previousPage = () => {
    page > 1 && setPage(page - 1);
  };

  const nextPage = () => {
    page < info.pages && setPage(page + 1);
  };

  return (
    <CallAllCaractersContext.Provider
      value={{ characterList, previousPage, nextPage, page, info }}
    >
      {children}
    </CallAllCaractersContext.Provider>
  );
};
