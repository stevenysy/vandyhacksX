import { motion } from "framer-motion";
import handLeft from "./assets/hand-left.png";
import handRight from "./assets/hand-background-right.png";

const Hand = ({
  hand,
  setHand,
  isCalculating,
  setIsCalculating,
  operator,
  setOperator,
  operand1,
  setOperand1,
  operand2,
  setOperand2,
}) => {
  /**
   * Generates a new hand by removing the card that has been played
   * @param {Number} index The index of the card to be removed
   */
  const generateNewHand = function (index) {
    const newHand = hand.slice();
    newHand.splice(index, 1);
    setHand(newHand);
    // setIsCalculating(false)
  };

  const calcNewCard = function (op1, op2, operator) {
    const newHand = hand.slice();

    if (operator === "plus") newHand.push(op1 + op2);
    else if (operator === "minus") newHand.push(op1 - op2);
    else if (operator === "times") newHand.push(op1 * op2);
    else if (operator === "divide") newHand.push(op1 / op2);
    else if (operator === "modulus") newHand.push(op1 % op2);

    setHand(newHand);
    setIsCalculating(false);
    console.log(hand);
  };

  return (
    <div className="hand-container">
      <img className="hand-background-left" src={handLeft} alt="hand left" />
      <img className="hand-background-right" src={handRight} alt="hand right" />
      <ul className="hand">
        {hand.map((cardName, index) => {
          return (
            <li className="card" key={index}>
              <motion.img
                className="card"
                src={require(`./assets/cards/card_${cardName}.png`)}
                alt="card"
                whileHover={{ y: -20 }}
                onClick={() => {
                  console.log(`played card with value ${cardName}`);

                  // display calculation modal if card played is an operator
                  if (typeof cardName === "string") {
                    console.log("played operator card");
                    setOperator(cardName);
                    setIsCalculating(true);
                  } else if (isCalculating) {
                    if (operand1) {
                      setOperand2(cardName);
                      calcNewCard(operand1, operand2, operator);
                    } else {
                      setOperand1(cardName);
                    }
                  }

                  // check if card meets any of the requirements
                  // const numSatisfied = checkReqs(cardName);
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
    </div>
  );
};

export default Hand;
