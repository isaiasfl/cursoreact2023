import React, { useContext } from "react";
import { InfoContext } from "../contexts/InfoContext";
function Componente4() {
  const miEdad = useContext(InfoContext);
  return (
    <div>
      <h4>Componente4</h4>
      <h4>EDAD:{miEdad.edad}</h4>
    </div>
  );
}

export default Componente4;
