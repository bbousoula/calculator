import React, { useState } from "react";

//import * as math from "mathjs";

import "./App.css";
import Display from "./components/Display";
import Row from "./components/Row";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const calculateResult = () => {
    const input = text.join("");
    try {
      /* setResult(math.evaluate(input)); */
      setResult(parse(input));
    } catch (err) {
      setResult("Error");
      console.log(err);
    }
  };

  const parse = (str) => Function(`'use strict'; return (${str})`)();

  const resetInput = () => {
    setText("");

    setResult("");
  };

  const backspace = () => {
    setText(text.slice(0, -1));
  };

  const buttonColor = "#f2a33c";

  const row_one = [
    {
      symbol: "Clear",
      color: null,
      handleClick: resetInput,
      isLarge: true,
    },
    {
      symbol: "C",
      color: null,
      handleClick: backspace,
      isLarge: false,
    },
    {
      symbol: "/",
      color: buttonColor,
      handleClick: addToText,
      isLarge: false,
    },
  ];

  const row_two = [
    {
      symbol: "7",
      color: null,
      handleClick: addToText,
      isLarge: true,
    },
    {
      symbol: "8",
      color: null,
      handleClick: addToText,
      isLarge: false,
    },
    {
      symbol: "9",
      color: null,
      handleClick: addToText,
      isLarge: false,
    },
    {
      symbol: "-",
      color: buttonColor,
      handleClick: addToText,
      isLarge: false,
    },
  ];

  const row_three = [
    {
      symbol: "4",
      color: null,
      handleClick: addToText,
      isLarge: true,
    },
    {
      symbol: "5",
      color: null,
      handleClick: addToText,
      isLarge: false,
    },
    {
      symbol: "6",
      color: null,
      handleClick: addToText,
      isLarge: false,
    },
    {
      symbol: "*",
      color: buttonColor,
      handleClick: addToText,
      isLarge: false,
    },
  ];

  const row_four = [
    {
      symbol: "1",
      color: null,
      handleClick: addToText,
      isLarge: true,
    },
    {
      symbol: "2",
      color: null,
      handleClick: addToText,
      isLarge: false,
    },
    {
      symbol: "3",
      color: null,
      handleClick: addToText,
      isLarge: false,
    },
    {
      symbol: "+",
      color: buttonColor,
      handleClick: addToText,
      isLarge: false,
    },
  ];

  const row_five = [
    {
      symbol: "0",
      color: null,
      handleClick: addToText,
      isLarge: true,
    },
    {
      symbol: ".",
      color: null,
      handleClick: addToText,
      isLarge: false,
    },
    {
      symbol: "=",
      color: null,
      handleClick: calculateResult,
      isLarge: false,
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <Display text={text} result={result} />
        <Row items={row_one} />
        <Row items={row_two} />
        <Row items={row_three} />
        <Row items={row_four} />
        <Row items={row_five} />
      </div>
    </div>
  );
};

export default App;
