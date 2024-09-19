import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <main>
          <p className="read-the-docs">Hola Mundo</p>
        </main>
      </div>
    </>
  );
}

export default App;
