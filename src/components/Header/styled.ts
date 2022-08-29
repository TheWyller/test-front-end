import styled from "styled-components";
import { rotated } from "../../styles/global";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  .logo {
    width: 300px;
    height: 150px;
    transition: linear 0.5s;
  }
  .portal {
    width: 150px;
    height: 150px;
    z-index: -1000;
    transition: linear 0.5s;
    position: absolute;
    animation: ${rotated} infinite 20s linear;
  }
  @media (min-width: 769px) {
    .logo {
      width: 600px;
      height: 300px;
    }
    .portal {
      width: 300px;
      height: 300px;
    }
  }
`;
