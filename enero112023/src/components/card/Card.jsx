import React from "react";

function Card({ nombre }) {
  function handleClick(e) {
    e.preventDefault();
  }
  return <div>estoy en card y me llamo {nombre}</div>;
  // <button onClick={handleClick}>Cambiar</button>;
}

export default Card;
