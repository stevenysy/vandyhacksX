import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Tutorial from "./pages/Tutorial";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/game" Component={Game}></Route>
      <Route exact path="/tutorial" Component={Tutorial}></Route>
    </Routes>
  );
};

export default Main;
