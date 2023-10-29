import { motion } from "framer-motion";

/**
 * Generates a new hand by removing the card that has been played
 * @param {Number} index The index of the card to be removed
 */
const Hand = ({ hand, setHand }) => {
  const generateNewHand = function (index) {
    const newHand = hand.slice();
    newHand.splice(index, 1);
    setHand(newHand);
  };

  return (
    <ul className="hand">
      {hand.map((cardVal, index) => {
        return (
          <li className="card" key={index}>
            <motion.img
              className="card"
              src={require(`./assets/cards/card_${cardVal}.png`)}
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
    </ul>
  );
};

export default Hand;
