import React, { useState } from "react";

const userIni = [
  {
    id: 1,
    nombre: "María",
    edad: 30,
    img: "urlImagen",
  },
  {
    id: 2,
    nombre: "Pepe",
    edad: 45,
    img: "urlImagen",
  },
];
function Usuarios() {
  const [users, setUsers] = useState(userIni);
  // const handleInsertar = () => {
  //   // Vamos a insertar un objeto nuevo
  //   // Pero no MUTAMOS el objeto de partida (userIni)
  //   const newUser = [...user];
  //   newUser.push({
  //     id: newUser.length + 1,
  //     nombre: "Carlos",
  //     edad: 60,
  //     img: "url Imagen",
  //   });
  //   setUser(newUser);
  // };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.nombre}</h1>
          <h3>{user.edad}</h3>
        </div>
      ))}
      <button>Insertar</button>
    </>
  );
}

export default Usuarios;
