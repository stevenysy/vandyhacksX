import card from "../assets/cards/card_1.png";
import handLeft from "../assets/hand-left.png";
import handRight from "../assets/hand-background-right.png";
import { motion } from "framer-motion";

const Tutorial = () => {
  return (
    <>
      <h1>Tutorial</h1>
      <div className="hand-container">
        <img className="hand-background-left" src={handLeft} alt="hand left" />
        <img
          className="hand-background-right"
          src={handRight}
          alt="hand right"
        />
        <ul className="hand">
          <li className="card">
            <motion.img
              className="card"
              src={card}
              alt="card"
              whileHover={{ y: -20 }}
            />
          </li>
          <li className="card">
            <motion.img
              className="card"
              src={card}
              alt="card"
              whileHover={{ y: -20 }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tutorial;
