import { Routes, Route } from "react-router-dom";
import card1 from "./assets/cards/card_1.png";
import card2 from "./assets/cards/card_2.png";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Tutorial from "./pages/Tutorial";
import { useState } from "react";

const Main = () => {
  const [hand, setHand] = useState([1, 2, 1, 2]);

  return (
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/game" Component={Game}></Route>
      <Route
        exact
        path="/tutorial"
        element={<Tutorial hand={hand} setHand={setHand} />}
        // Component={Tutorial}
      ></Route>
    </Routes>
  );
};

export default Main;
