import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllInfosCharacter from "../components/Characters/AllInfosCharacter";
import Header from "../components/Header";
import { FindACaracterContext } from "../contexts/FindACaracterContext";

const CharacterInfo = () => {
  let { characterId } = useParams();
  const { setCaracterID, character } = useContext(FindACaracterContext);
  useEffect(() => {
    setCaracterID(Number(characterId));
  }, [characterId, setCaracterID]);

  return (
    <>
      <Header />

      <main>
        {character && (
          <AllInfosCharacter character={character}></AllInfosCharacter>
        )}
      </main>
    </>
  );
};

export default CharacterInfo;
