// ---- Lo imports ----
import React, { useEffect, useState } from "react";

// --- variables globales o initialState ---
const stateInitialContador1 = 0;
const stateInitialContador2 = 0;

const UsandoUseEffect = () => {
  // --- declaración de los estados ----
  const [contador1, setContador1] = useState(stateInitialContador1);
  const [contador2, setContador2] = useState(stateInitialContador2);

  // --- declaración de los Effectos ----
  useEffect(() => {
    console.log("Estoy ejecutando el efecto");
  }, []);
  useEffect(() => {
    console.log("Estoy ejecutando el efecto cuando cambie el contador1");
  }, [contador1]);
  useEffect(() => {
    console.log(
      "Estoy ejecutando el efecto cuando cambie el contador1 o contador2"
    );
  }, [contador1, contador2]);

  // --- Lógica de funciones ----
  const handleClickContador1 = () => {
    setContador1((oldContador) => oldContador + 1);
  };

  const handleClickContador2 = () => {
    setContador2((contador2) => contador2 + 1);
    setContador2((contador2) => contador2 - 10);
    setContador2((contador2) => contador2 * 200);
  };
  return (
    //--- pintamos con JSX mi componente ---
    <div>
      Contador1: {contador1}
      <hr />
      Contador2:{contador2}
      <hr />
      Ejemplo del useo de UseEffect y las dependencias:
      <br />
      <div>
        <button onClick={() => handleClickContador1()}>
          Aumentar contador1
        </button>
        <br />
        <br />
        <button onClick={() => handleClickContador2()}>
          Aumentar Contador2
        </button>
      </div>
    </div>
  );
};

export default UsandoUseEffect;
