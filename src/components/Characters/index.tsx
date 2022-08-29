import { useContext, useEffect } from "react";
import { FindCaractersContext } from "../../contexts/FindCaractersContext";

import { ICharacterList } from "../../interfaces/react.interfaces";
import CharCard from "../CharCard";
import { SectionStyled } from "./styled";

const Characters: React.FC<ICharacterList> = ({ characterList }) => {
  const {
    search,
    orderByName,
    orderById,
    allCharacters,
    setAllCharacters,
    isChecked,
  } = useContext(FindCaractersContext);

  useEffect(() => {
    search.length === 0
      ? setAllCharacters(characterList)
      : isChecked
      ? setAllCharacters(orderByName())
      : setAllCharacters(orderById());
  }, [
    characterList,
    isChecked,
    orderById,
    orderByName,
    search.length,
    setAllCharacters,
  ]);

  return (
    <SectionStyled>
      {allCharacters.map((elem) => (
        <CharCard
          key={elem.id}
          id={elem.id}
          image={elem.image}
          name={elem.name}
          origin={elem.origin}
          gender={elem.gender}
          species={elem.species}
          status={elem.status}
        />
      ))}
    </SectionStyled>
  );
};

export default Characters;
