import enemyHeart from "./assets/enemy-heart.png";
import enemyHeartBroken from "./assets/enemy-heart-broken.png";
import enemyHeartMask from "./assets/enemy-heart-mask.png";

const EnemyHp = ({ hp, reqs }) => {
  return (
    <>
      {hp > 0 ? (
        <img className="enemy-heart" src={enemyHeart} alt="enemy heart" />
      ) : (
        <img
          src={enemyHeartBroken}
          alt="enemy broken heart"
          className="enemy-heart-broken"
        />
      )}
      <ul className="reqs-list">
        {hp > 1 &&
          Array(hp - 1)
            .fill(true)
            .map((_, i) => {
              return (
                <li className="requirement">
                  <img
                    src={enemyHeartMask}
                    alt="requirement mask"
                    className="req-mask"
                  />
                  <span className="req-name">{reqs[i + 1]}</span>
                </li>
              );
            })}
        {hp > 0 && (
          <li className="requirement">
            <img
              src={enemyHeartMask}
              alt="requirement mask"
              className="first-req-mask"
            />
            <span className="req-name">{reqs[0]}</span>
          </li>
        )}
      </ul>
    </>
  );
};

export default EnemyHp;
