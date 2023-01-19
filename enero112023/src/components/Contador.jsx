import React, { useState } from "react";

function Contador() {
  // -- State ---
  const [contador, setContador] = useState(0);
  const [condicion, setCondicion] = useState(true);

  const handleIncrementar = () => {
    setContador(contador + 1);
    // setContador((previoValor) => previoValor + 1); <-- IMPORTANT
    //console.log("estoy en handleincrementar", contador);
  };

  const handleCambiar = () => {
    setCondicion(!condicion);
  };
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => handleIncrementar()}>incrementar</button>
      <button onClick={() => handleCambiar()}>Cambiar</button>

      {condicion && (
        <>
          <h1>La acción es true</h1>
          <h2>Hola mundo</h2>
        </>
      )}
    </div>
  );
}

export default Contador;
