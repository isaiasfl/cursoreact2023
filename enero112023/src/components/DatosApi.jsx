import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import getUsers from "../helpers/getUsers";
// variables globales.
const initialStateUsuarios = [];
const DatosApi = () => {
  // estados
  const [usuarios, setUsuarios] = useState(initialStateUsuarios);
  // efectos
  useEffect(() => {
    traerUsuarios();
  }, []);

  // lógica funcional.

  const traerUsuarios = () => {
    // Función que gracias al helper getUsers me devueve los usuarios de la api https://reqres.in/api/users?page=1
    getUsers()
      .then((users) => {
        setUsuarios(users);
        console.log("Data traida de la api:", users);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-5 mt-5">
      {usuarios.map((usuario) => (
        <Card
          className="text-center mb-4"
          border="primary"
          style={{ width: "18rem" }}
          key={usuario.id}
        >
          <Card.Img
            className="mx-auto mt-3"
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <Card.Body>
            <Card.Title>
              Usuario: {`${usuario.first_name} ${usuario.last_name}`}
            </Card.Title>
            <Card.Subtitle>Email: {usuario.email}</Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DatosApi;
