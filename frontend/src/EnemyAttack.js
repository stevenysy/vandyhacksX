import enemyAttack from "./assets/enemy-attack.png";

const EnemyAttack = ({ attack }) => {
  return (
    <div className="enemy-attack-container">
      <img src={enemyAttack} alt="enemy attack bar" className="enemy-attack" />
      <span className="enemy-attack-name">{attack}</span>
    </div>
  );
};

export default EnemyAttack;
