import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Tutorial from "./pages/Tutorial";
import { fetchCards } from "./utils";

const Main = () => {
  // const [hand, setHand] = useState([1, 2, 1, 2]);
  // const [hp, setHp] = useState(INIT_HP);
  // const [enemyHp, setEnemyHp] = useState(INIT_ENEMY_HP);
  // const [reqs, setReqs] = useState([
  //   "odd num",
  //   "even num",
  //   "prime num",
  //   "div by 3",
  // ]);
  // const [attack, setAttack] = useState("even num");
  // const [isCalculating, setIsCalculating] = useState(true);

  return (
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/game" Component={Game}></Route>
      <Route exact path="/tutorial" element={<Tutorial />}></Route>
    </Routes>
  );
};

export default Main;
