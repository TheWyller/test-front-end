import { ICharacter } from "../../../interfaces/react.interfaces";
import AllInfosCard from "../../CharCard/AllInfosCard";
import { SectionStyled } from "./styled";

const AllInfosCharacter: React.FC<ICharacter> = ({ character }) => {
  return (
    <SectionStyled>
      <AllInfosCard
        key={character.id}
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        type={character.type}
        gender={character.gender}
        origin={character.origin}
        location={character.location}
        image={character.image}
        episode={character.episode}
        url={character.url}
        created={character.created}
      />
    </SectionStyled>
  );
};

export default AllInfosCharacter;
