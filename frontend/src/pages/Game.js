import { Link } from "react-router-dom";
// import "./App.css";

const Game = () => {
  return (
    <div className="page">
      <h1>Start game!</h1>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default Game;
