import { StyledHeader } from "./styled";
import logo from "../../assets/Rick-And-Morty-Logo.png";
import portalImd from "../../assets/portal.png";
const Header = () => {
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="Rick and Morty's logo" className="logo" />
        <img src={portalImd} alt="Rick and Morty's portal" className="portal" />
        <h1>Characters</h1>
      </StyledHeader>
    </>
  );
};

export default Header;
