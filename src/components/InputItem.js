import React from "react";
import "./inputItem.css";

const InputItem = ({ bg, setBg, isDark, setIsDark }) => {
  return (
    <div>
      <input
        type="text"
        value={bg}
        placeholder="Enter The Color "
        onChange={(e) => setBg(e.target.value)}
      />
      <button type="button" onClick={() => setIsDark(!isDark)}>
        Toggle Text Color
      </button>
    </div>
  );
};

export default InputItem;
