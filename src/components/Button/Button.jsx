import "./Button.scss";

const Button = ({ symbol, color, handleClick, isLarge }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className={`button-wrapper ${isLarge ? "large-button" : ""}`}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};
export default Button;
