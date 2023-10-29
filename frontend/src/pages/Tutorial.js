import Hand from "../Hand.js";
import HpBar from "../HpBar.js";
import MainChar from "../MainChar";
import EnemyHp from "../EnemyHp.js";
import EnemyAttack from "../EnemyAttack.js";

const Tutorial = ({ hand, setHand, hp, setHp, enemyHp, reqs, attack }) => {
  // const reqs = [(num) => num % 2 === 0, (num) => num % 2 !== 0];

  // const checkReqs = function (num) {
  //   let count = 0;
  //   reqs.forEach((req, index) => {
  //     if (req(num)) {
  //       reqs.splice(index, 1);
  //       count++;
  //     }
  //   });

  //   return count;
  // };

  return (
    <>
      <HpBar hp={hp} setHp={setHp} />
      <EnemyAttack attack={attack} />
      <MainChar hp={hp} />
      <Hand hand={hand} setHand={setHand} />
      <EnemyHp hp={enemyHp} reqs={reqs} />
    </>
  );
};

export default Tutorial;
