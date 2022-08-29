import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const SectionStyled = styled.section`
  background-color: rgb(83, 234, 255);
  width: 300px;
  border: 2px solid rgb(143, 143, 143);
  color: rgb(0, 100, 100);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;

  cursor: default;
  margin: 0;
  border-radius: 20px;
  padding: 10px;

  animation: ${appearFromLeft} 1s;

  &.others {
    background-color: rgb(246, 203, 203);
    color: rgb(153, 0, 0);
  }
  h2 {
    font-size: 40px;
  }
  img {
    width: 250px;
    border-radius: 20px;
    margin-bottom: 15px;
  }

  p {
    font-weight: bold;
    font-size: 30px;
    width: 100%;
    margin: 0;
  }

  p:nth-of-type(3) {
    margin-bottom: 5px;
  }

  button {
    width: 70%;
    height: 35px;
    border-radius: 20px;
    font-size: 25px;
    padding-top: 5px;
    background-color: rgb(206, 235, 120);
    &:hover {
      transform: scale(1.02);
    }
  }
`;
