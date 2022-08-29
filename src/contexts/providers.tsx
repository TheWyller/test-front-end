import React from "react";
import { Ichildren } from "../interfaces/react.interfaces";
import { CallAllCaractersProvider } from "./CallAllCaractersContext";
import { FindACaracterProvider } from "./FindACaracterContext";
import { FindCaractersProvider } from "./FindCaractersContext";

const Providers = ({ children }: Ichildren) => {
  return (
    <CallAllCaractersProvider>
      <FindCaractersProvider>
        <FindACaracterProvider>{children}</FindACaracterProvider>
      </FindCaractersProvider>
    </CallAllCaractersProvider>
  );
};

export default Providers;
