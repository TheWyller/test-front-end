import { useNavigate } from "react-router-dom";
import { ICard } from "../../interfaces/characterSchema.interfaces";
import { SectionStyled } from "./style";
function CharCard({
  id,
  status,
  name,
  image,
  origin,
  gender,
  species,
  location,
  episode,
}: ICard) {
  const navigate = useNavigate();
  return (
    <SectionStyled className={status === "Alive" ? status : "others"}>
      <h2>{name.length <= 15 ? name : name.slice(0, 15) + "..."}</h2>
      <img src={image} alt={"foto do ou da" + name} />
      <p>{"Origin: " + origin.name}</p>
      <p>{"Gender: " + gender}</p>
      <p>{"Species: " + species}</p>
      <button onClick={() => navigate(`/characterInfo/${id}`)}>More...</button>
    </SectionStyled>
  );
}
export default CharCard;
