import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { guardar } from "../helpers/acceso-firebase";

function GuardarPiezas({ handlePieza }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(obj) {
    async function data() {
      //añadir en servidor
      const data = await guardar(obj);

      //añadir en cliente
      handlePieza.setPieza(handlePieza.pieza.concat({ id: data, data: obj }));
    }
    data();
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register("name")} type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Precio</Form.Label>
          <Form.Control {...register("price")} type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Valoracion</Form.Label>
          <Form.Control {...register("valoracion")} type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </>
  );
}

export default GuardarPiezas;
