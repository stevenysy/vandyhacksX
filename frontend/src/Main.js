import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/game" Component={Game}></Route>
    </Routes>
  );
};

export default Main;
