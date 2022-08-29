import styled from "styled-components";

export const Button = styled.button`
  margin-top: 20px;
  border: none;
  width: 70vw;
  height: 50px;
  color: blue;
  font-weight: bold;
  background-color: rgb(178, 223, 40);
  border-radius: 10px;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease;
  max-width: 300px;
  margin: 10px;
  font-size: 30px;
  padding-top: 10px;

  &:hover {
    transform: scale(1.02);
  }
`;
