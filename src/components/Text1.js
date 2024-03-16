import React from "react";

const Text1 = ({ text }) => {
  const colorfulLetters = text.split("").map((letter, index) => (
    <span
      key={index}
      className={`text-7xl font-bold text-center transition py-5 text-[#22e55c] hover:text-[#ffffff]`}
    >
      {letter}
    </span>
  ));

  return <h1 className="text-center">{colorfulLetters}</h1>;
};

export default Text1;
