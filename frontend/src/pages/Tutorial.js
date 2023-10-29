import Hand from "../Hand.js";
import HpBar from "../HpBar.js";
import MainChar from "../MainChar";
import EnemyHp from "../EnemyHp.js";
import EnemyAttack from "../EnemyAttack.js";
import { INIT_HP, INIT_ENEMY_HP } from "../config";
import { fetchCards } from "../utils.js";
import { useState } from "react";
import CalcModal from "../CalcModal.js";

try {
  const data = await fetchCards(7);
  console.log(data);
} catch (err) {
  console.error(err);
}

fetchCards().then((data) => console.log(data));

const Tutorial = () => {
  const [hand, setHand] = useState([1, 2, 1, 2]);
  const [hp, setHp] = useState(INIT_HP);
  const [enemyHp, setEnemyHp] = useState(INIT_ENEMY_HP);
  const [reqs, setReqs] = useState([
    "odd num",
    "even num",
    "prime num",
    "div by 3",
  ]);
  const [attack, setAttack] = useState("even num");
  const [isCalculating, setIsCalculating] = useState(false);

  return (
    <>
      <HpBar hp={hp} setHp={setHp} />
      <EnemyAttack attack={attack} />
      <MainChar hp={hp} />
      {isCalculating && <CalcModal />}
      <Hand hand={hand} setHand={setHand} setIsCalculating={setIsCalculating} />
      <EnemyHp hp={enemyHp} reqs={reqs} />
    </>
  );
};

export default Tutorial;
