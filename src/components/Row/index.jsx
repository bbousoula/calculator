import React from "react";
import Button from "../Button/Button.jsx";

export default function Row({ items }) {
  return (
    <div className="row">
      {items.map((item) => (
        <Button
          key={item.symbol}
          symbol={item.symbol}
          handleClick={item.handleClick}
          isLarge={item.isLarge}
          color={item.color}
        />
      ))}
    </div>
  );
}
