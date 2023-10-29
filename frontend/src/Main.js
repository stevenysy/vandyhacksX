import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Tutorial from "./pages/Tutorial";
import { INIT_HP, INIT_ENEMY_HP } from "./config";
import { useState } from "react";

const Main = () => {
  const [hand, setHand] = useState([1, 2, 1, 2]);
  const [hp, setHp] = useState(INIT_HP);
  const [enemyHp, setEnemyHp] = useState(INIT_ENEMY_HP);
  const [reqs, setReqs] = useState([
    "odd num",
    "even num",
    "prime num",
    "div by 3",
  ]);

  return (
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/game" Component={Game}></Route>
      <Route
        exact
        path="/tutorial"
        element={
          <Tutorial
            hand={hand}
            setHand={setHand}
            hp={hp}
            enemyHp={enemyHp}
            reqs={reqs}
          />
        }
        // Component={Tutorial}
      ></Route>
    </Routes>
  );
};

export default Main;
