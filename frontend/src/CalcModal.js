import calcModal from "./assets/calc-modal.png";

const CalcModal = ({ isCalculating, operator, operand1, operand2 }) => {
  return (
    <div className="calc-modal-container">
      <img src={calcModal} alt="calculation modal" className="calc-modal" />
      {operand1 && (
        <img
          className="calc-modal-operand"
          src={require(`./assets/nums-and-operators/element_${operand1}.png`)}
          alt="operand"
        />
      )}
      <img
        src={require(`./assets/nums-and-operators/element_${operator}.png`)}
        alt="operator"
        className="calc-modal-operator"
      />
      {operand2 && (
        <img
          className="calc-modal-operand"
          src={require(`./assets/nums-and-operators/element_${operand2}.png`)}
          alt="operand"
        />
      )}
    </div>
  );
};

export default CalcModal;
