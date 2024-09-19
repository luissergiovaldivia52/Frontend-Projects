import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PageContent from "./Component/PageContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <main>
          <PageContent />
        </main>
      </div>
    </>
  );
}

export default App;
