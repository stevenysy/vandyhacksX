import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <ul className="buttons">
        <li className="homepage-buttons">
          <Link to="game">
            <p>Start game!</p>
          </Link>
        </li>
        <li className="homepage-buttons">
          <Link to="tutorial">Tutorial</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
