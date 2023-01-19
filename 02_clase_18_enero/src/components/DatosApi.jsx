import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import getPost from "../helpers/getPost";
import getUsers from "../helpers/getUsers";
const initialUser = [];
const DatosApi = () => {
  const [usuarios, setUsuarios] = useState(initialUser);

  const traerUsuarios = () => {
    getUsers()
      .then((newUser) => {
        setUsuarios(newUser.data);
        console.log("Data:", newUser.data);
      })
      .catch((err) => console.log(err));
  };

  // efectos: -------------
  useEffect(() => {
    traerUsuarios();
  }, []);

  return (
    <div>
      {/* <article>{JSON.stringify(usuarios)}</article> */}
      {usuarios.map((user) => (
        <Card
          className="text-center mb-4"
          border="primary"
          style={{ width: "18rem" }}
          key={user.id}
        >
          <Card.Img
            className="mx-auto mt-3"
            variant="top"
            src={user.avatar}
            alt={user.first_name}
            style={{
              borderRadius: "50%",
              width: "70%",
            }}
          />
          <Card.Body>
            <Card.Title>Username: {user.first_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Email: {user.email}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DatosApi;
