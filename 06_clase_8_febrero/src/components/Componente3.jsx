import React from "react";
import { useInfoContext } from "../contexts/InfoContext";
import Componente4 from "./Componente4";

function Componente3() {
  const InfoContext = useInfoContext();
  return (
    <div>
      <h3>Componente3</h3>
      <Componente4 />
      Datos: {InfoContext.edad}
    </div>
  );
}

export default Componente3;
