import { Link } from "react-router-dom";

const StartGameBtn = () => {
  return (
    <Link to="game">
      <button variant="outlined">Start game!</button>
    </Link>
  );
};

export default StartGameBtn;
