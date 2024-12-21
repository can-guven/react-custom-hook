import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLocalStorage } from "react-custom-hook";

function App() {
  const [value, setValue] = useLocalStorage("coder", "Hello World");

  return (
    <div>
      Stored Value
      <input
        placeholder="Chage stored value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
