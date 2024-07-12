import "./App.css";
import { useState } from "react";
import text from "./data";

function App() {
  const [paras, setParas] = useState("");
  function generateText() {
    let n = paras;
    if (n > 9) {
      alert("only 9 paras at a time");
      return;
    }
    document.querySelector(".text").innerHTML = "";
    while (n-- > 0) {
      let txt = document.createElement("p");
      txt.innerHTML = text[paras - n - 1];
      document.querySelector(".text").appendChild(txt);
    }
  }
  return (
    <div className="App">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <p className="input">
        No. of Paragraphs{" "}
        <input
          type="number"
          maxLength={2}
          max={9}
          min={0}
          value={paras}
          onChange={(e) => {
            setParas(e.target.value);
          }}
        />{" "}
        <button onClick={() => generateText()}>Generate</button>
      </p>
      <p className="text"></p>
    </div>
  );
}

export default App;
