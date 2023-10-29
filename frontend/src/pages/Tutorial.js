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
  const data = fetchCards(7);
  console.log(data);
} catch (err) {
  console.error(err);
}

const Tutorial = () => {
  const [hand, setHand] = useState([1, 2, "times", 3, "plus", 4, 6]);
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
  const [operator, setOperator] = useState("");
  const [operand1, setOperand1] = useState();
  const [operand2, setOperand2] = useState();

  return (
    <>
      <HpBar hp={hp} setHp={setHp} />
      <EnemyAttack attack={attack} />
      <MainChar hp={hp} />
      {isCalculating && (
        <CalcModal
          operator={operator}
          operand1={operand1}
          operand2={operand2}
        />
      )}
      <Hand
        hand={hand}
        setHand={setHand}
        isCalculating={isCalculating}
        setIsCalculating={setIsCalculating}
        operator={operator}
        setOperator={setOperator}
        operand1={operand1}
        setOperand1={setOperand1}
        operand2={operand2}
        setOperand2={setOperand2}
      />
      <EnemyHp hp={enemyHp} reqs={reqs} />
    </>
  );
};

export default Tutorial;
