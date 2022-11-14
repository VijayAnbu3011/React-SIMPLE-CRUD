import React, { useState } from "react";
import InputItem from "./InputItem";
import Square from "./Square";

const App1 = () => {
  const [bg, setBg] = useState("");
  const [isDark, setIsDark] = useState(true);
  return (
    <div>
      <Square bg={bg} isDark={isDark} />
      <InputItem bg={bg} setBg={setBg} isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default App1;
