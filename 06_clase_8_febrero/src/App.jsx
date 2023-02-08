import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Componente1 from "./components/Componente1";
import Componente5 from "./components/Componente5";
import { ContextInfoProvider } from "./contexts/InfoContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ContextInfoProvider>
        <Componente1 />
        <Componente5 />
      </ContextInfoProvider>
    </div>
  );
}

export default App;
