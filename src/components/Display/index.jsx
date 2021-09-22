import "./Display.scss";

const Display = ({ text, result }) => {
  return (
    <div className="display-wrapper">
      <div className="result">
        <h1>{result}</h1>
      </div>
      <div className="text">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Display;
