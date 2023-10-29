import hpBarBackground from "./assets/hpbar.png";
import hp from "./assets/hp.png";

const HpBar = () => {
  return (
    <div className="hp-bar-container">
      <img className="hp-bar-background" src={hpBarBackground} alt="hp-bar" />
      <ul className="hp">
        <li className="heart">
          <img className="heart" src={hp} alt="heart" />
        </li>
        <li className="heart">
          <img className="heart" src={hp} alt="heart" />
        </li>
      </ul>
    </div>
  );
};

export default HpBar;
