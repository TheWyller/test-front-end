import { useContext, useState } from "react";
import { FindCaractersContext } from "../../contexts/FindCaractersContext";
import { Button } from "../Button/styled";
import { StyledBox, StyledForm } from "./styled";

const Search = () => {
  const { setSearch, setIsChecked, search, setSortCharacters, sortCharacters } =
    useContext(FindCaractersContext);

  const [inputValue, setInputValue] = useState<string>("");
  const [checkedValue, setCheckedValue] = useState<boolean>(false);

  return (
    <>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          className="textInput"
        />
        <>
          <label htmlFor="orderByNameCheck">Order By Name</label>
          <StyledBox
            id="orderByNameCheck"
            type="checkbox"
            name="orderBy"
            checked={checkedValue}
            onChange={(e) => {
              setCheckedValue(e.currentTarget.checked);
            }}
          />
        </>
        <Button
          onClick={() => {
            if (search.length > 0) {
              setSearch("");
              setIsChecked(false);
              setSortCharacters(sortCharacters);
            }
            setIsChecked(checkedValue);
            setSearch(inputValue);
            setInputValue("");
            setCheckedValue(false);
          }}
        >
          Search
        </Button>
      </StyledForm>
    </>
  );
};

export default Search;
