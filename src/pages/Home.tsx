import { useContext } from "react";
import { Button } from "../components/Button/styled";
import Characters from "../components/Characters";
import Header from "../components/Header";
import { StyledMain } from "../components/Main/styled";
import Search from "../components/Search";
import { CallAllCaractersContext } from "../contexts/CallAllCaractersContext";

const Home = () => {
  const { characterList, previousPage, nextPage, page, info } = useContext(
    CallAllCaractersContext
  );

  return (
    <>
      <Header />
      <Search />
      <StyledMain>
        <Characters characterList={characterList} />
        <section>
          {page > 1 && <Button onClick={previousPage}>Previous</Button>}
          {page < info.pages && <Button onClick={nextPage}>Next</Button>}
        </section>
      </StyledMain>
    </>
  );
};

export default Home;
