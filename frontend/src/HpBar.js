import hpBarBackground from "./assets/hpbar.png";
import heart from "./assets/hp.png";

const HpBar = ({ hp }) => {
  return (
    <div className="hp-bar-container">
      <img className="hp-bar-background" src={hpBarBackground} alt="hp-bar" />
      <ul className="hp">
        {hp > 1 && (
          <li className="heart">
            <img className="first-heart" src={heart} alt="heart" />
          </li>
        )}
        {hp > 0 &&
          Array(hp - 1)
            .fill(true)
            .map((_, i) => {
              return (
                <li className="heart" key={i}>
                  <img className="heart" src={heart} alt="heart" />
                </li>
              );
            })}
        {/* <li className="heart">
          <img className="heart" src={hp} alt="heart" />
        </li>
        <li className="heart">
          <img className="heart" src={hp} alt="heart" />
        </li>
        <li className="heart">
          <img className="heart" src={hp} alt="heart" />
        </li>
        <li className="heart">
          <img className="heart" src={hp} alt="heart" />
        </li> */}
      </ul>
    </div>
  );
};

export default HpBar;
