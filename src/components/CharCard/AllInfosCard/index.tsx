import { useNavigate } from "react-router-dom";
import { ICard } from "../../../interfaces/characterSchema.interfaces";
import { Button } from "../../Button/styled";

import { SectionStyled } from "./style";
function AllInfosCard({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
}: ICard) {
  const navigate = useNavigate();
  return (
    <SectionStyled className={status === "Alive" ? status : "others"}>
      <img src={image} alt={"foto do ou da" + name} />
      <section>
        <h2>{name}</h2>
        <p>
          Character's Id:<span>{id}</span>
        </p>
        <p>
          Origin:<span>{origin.name}</span>
        </p>
        <p>
          Gender:<span>{gender}</span>
        </p>
        <p>
          Species:<span>{species}</span>
        </p>
        <p>
          Location:<span>{location?.name}</span>
        </p>
        <p>
          Apareceu em:
          <span>{episode?.length}</span>
          ep.
        </p>

        {type?.length !== 0 && (
          <p>
            Type: <span>{type}</span>
          </p>
        )}

        <Button onClick={() => navigate(`/`)}>Back</Button>
      </section>
    </SectionStyled>
  );
}
export default AllInfosCard;
