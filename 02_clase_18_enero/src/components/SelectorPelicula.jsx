import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import getMoviedb from "../helpers/getMoviedb";
// stateInitial
const initalStatePelis = [];
const SelectorPelicula = ({ setIdSeleccionado }) => {
  // estados.
  const [nombrePelis, setNombrePelis] = useState(initalStatePelis);

  // efectos
  useEffect(() => {
    traerPeliculas();
  }, []);

  // lógica de funciones
  const traerPeliculas = () => {
    getMoviedb()
      .then((peliculas) => setNombrePelis(peliculas))
      .catch((error) => console.error(error));
  };

  const handleSelect = (e) => {
    setIdSeleccionado(e.target.value);
  };

  return (
    <Form.Select
      // aria-label="Default select example"
      onChange={(e) => handleSelect(e)}
    >
      <option>Seleccione una película</option>
      {nombrePelis.map((peli) => (
        <option value={peli.id} key={peli.id}>
          {peli.title}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectorPelicula;
