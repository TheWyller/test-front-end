import styled from "styled-components";
import { appearFromLeft } from "../../../styles/global";

export const SectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin: 10px 0;
  animation: ${appearFromLeft} 1s;

  img {
    border: 2px solid rgb(143, 143, 143);
  }

  h2,
  p {
    padding: 0 20px;
  }

  h2 {
    font-size: 45px;
  }
  p {
    font-size: 28px;
    font-weight: bold;
  }
  span {
    font-weight: normal;
    color: rgb(32, 141, 69);
    margin: 0 10px;
  }
`;
