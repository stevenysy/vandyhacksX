import Hand from "../Hand.js";
import HpBar from "../HpBar.js";

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

  return (
    <>
      <HpBar />
      <Hand hand={hand} setHand={setHand} />
    </>
  );
};

export default Tutorial;
