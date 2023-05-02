import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenu from "./components/layouts/MainMenu/MainMenu";
import SelectLevel from "./components/layouts/SelectLevel/SelectLevel";
import Game from "./components/layouts/Game/Game";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainMenu />} />
        <Route path={"/select-level"} element={<SelectLevel />} />
        <Route path={"/:boardSize/:levelName"} element={<Game />} />
        <Route path={"/create-map"} element={<div>create map page</div>} />
        <Route path={"/load-map"} element={<div>load map page</div>} />
        <Route path={"*"} element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}
