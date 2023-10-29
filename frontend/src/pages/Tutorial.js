import handLeft from "../assets/hand-left.png";
import handRight from "../assets/hand-background-right.png";
import Hand from "../Hand.js";
import { motion } from "framer-motion";

const Tutorial = ({ hand, setHand }) => {
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

  /**
   * Generates a new hand by removing the card that has been played
   * @param {Number} index The index of the card to be removed
   */
  const generateNewHand = function (index) {
    const newHand = hand.slice();
    newHand.splice(index, 1);
    setHand(newHand);
  };

  return (
    <>
      <div className="hand-container">
        <img className="hand-background-left" src={handLeft} alt="hand left" />
        <img
          className="hand-background-right"
          src={handRight}
          alt="hand right"
        />
        {/* <ul className="hand">
          {hand.map((cardVal, index) => {
            return (
              <li className="card" key={index}>
                <motion.img
                  className="card"
                  src={require(`../assets/cards/card_${cardVal}.png`)}
                  alt="card"
                  whileHover={{ y: -20 }}
                  onClick={() => {
                    console.log(`played card with value ${cardVal}`);

                    // check if card meets any of the requirements
                    // const numSatisfied = checkReqs(cardVal);
                    // console.log(`satisfied ${numSatisfied} requirements`);
                    // console.log(reqs);

                    // if so, remove the played card from hand
                    generateNewHand(index);
                  }}
                />
              </li>
            );
          })}
        </ul> */}
        <Hand hand={hand} setHand={setHand} />
      </div>
    </>
  );
};

export default Tutorial;
