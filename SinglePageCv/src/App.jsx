import { useState } from "react";

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
