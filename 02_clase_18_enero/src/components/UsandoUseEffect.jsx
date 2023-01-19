import React, { useEffect, useState } from "react";

const UsandoUseEffect = () => {
  // ejemplo de como usar useEffect sin dependencias.
  console.log("1.- Esto se ejecuta al comienzo");

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    // useEffect se ejecuta cada vez que se renderiza el componente o hay modificaciones en el estado.
    console.log(
      "Eso se ejecuta SIEMPRE DESPUÉS de renderizar el componente o al modificar cualquier componente"
    );
  });
  useEffect(() => {
    console.log(
      "Se ejecuta después de renderizar el componente y sólo una vez"
    );
  }, []);

  useEffect(() => {
    console.log(
      "Se ejecuta después de renderizar el componente y sólo al cambiar el estado de contador2"
    );
  }, [contador2]);

  const handleOnclick1 = (e) => {
    return setContador1((contadorPrevio) => contadorPrevio + 1);
  };
  const handleOnclick2 = (e) => {
    return setContador2((contadorPrevio) => contadorPrevio + 1);
  };

  return (
    <div>
      Contador1: {contador1}
      <br />
      Contador2: {contador2}
      <hr />
      Ejemplo de UseEffect sin Dependencias.
      <div>
        <button onClick={() => handleOnclick1()}>Aumentar Contador1</button>
        <br />
        <br />
        <button onClick={() => handleOnclick2()}>Aumentar Contador2</button>
      </div>
    </div>
  );
};

export default UsandoUseEffect;
