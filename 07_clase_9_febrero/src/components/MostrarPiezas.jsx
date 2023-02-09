import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { borrarPieza } from "../helpers/acceso-firebase";

function MostrarPiezas({ handlePieza }) {
  let renderPieza = [];
  renderPieza = handlePieza.pieza.map((item) => (
    <Card key={item.id} style={{ width: "18rem" }}>
      <Card.Header>
        <Button className="bg-transparent">✏️</Button>
        <Button onClick={() => borrar(item.id)} className="bg-transparent">
          🗑️
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>Nombre: {item.data.name}</Card.Title>
        <Card.Text>Precio: {item.data.price}</Card.Text>
        <Card.Text>Valoracion: {item.data.valoracion}</Card.Text>
      </Card.Body>
    </Card>
  ));

  renderPieza.reverse();
  async function borrar(id) {
    // borrar en servidor
    await borrarPieza(id);

    //borrar en cliente
    handlePieza.setPieza(handlePieza.pieza.filter((item) => item.id != id));
  }
  function editar() {}
  return <>{renderPieza}</>;
}

export default MostrarPiezas;
