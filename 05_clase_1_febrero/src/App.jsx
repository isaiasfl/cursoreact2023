import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import FormularioDatos from "./components/FormularioDatos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FormularioDatos />
    </div>
  );
}

export default App;
