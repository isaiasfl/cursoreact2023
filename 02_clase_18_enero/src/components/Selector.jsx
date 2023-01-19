import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import getMoviedb from "../helpers/getMoviedb";
const initialStatePelis = [];
const Selector = ({ setIdSeleccionado }) => {
  const [nombrePelis, setNombrePelis] = useState(initialStatePelis);
  useEffect(() => {
    traerPeliculas();
  }, []);

  const traerPeliculas = () => {
    getMoviedb()
      .then((pelis) => setNombrePelis(pelis))
      .catch((error) => console.error(error));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setIdSeleccionado(e.target.value);
  };

  return (
    <Form.Select onChange={handleChange}>
      <option>Selecciona una opción</option>
      {nombrePelis.map((peli) => (
        <option key={peli.id} value={peli.id}>
          {peli.title}
        </option>
      ))}
    </Form.Select>
  );
};

export default Selector;
