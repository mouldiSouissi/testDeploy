import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="card">
          <h1>Hello github actions</h1>
        </div>
      </div>
    </>
  );
}

export default App;
