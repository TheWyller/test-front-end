import { Route, Routes } from "react-router-dom";
import CharacterInfo from "../pages/CharacterInfo";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characterInfo">
        <Route path=":characterId" element={<CharacterInfo />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
