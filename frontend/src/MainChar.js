import mainChar from "./assets/main-char.png";

const MainChar = ({ hp }) => {
  return (
    hp > 0 && <img className="main-char" src={mainChar} alt="main character" />
  );
};

export default MainChar;
