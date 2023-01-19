import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import getInfoPelicula from "../helpers/getInfoPelicula";
const stateInitalPelicula = {};
const TarjetaPeliculaPablo = ({ idSeleccionado }) => {
  // estados
  const [pelicula, setPelicula] = useState(stateInitalPelicula);
  //efectos
  useEffect(() => {
    traerUnaPeli();
  }, [idSeleccionado]);

  // lógica funcional.
  const traerUnaPeli = () => {
    getInfoPelicula(idSeleccionado)
      .then((peli) => {
        setPelicula(peli);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    idSeleccionado && (
      <Card
        className="text-center mb-4"
        border="secondary"
        style={{ width: "25rem" }}
      >
        <Card.Img
          className="mx-auto mt-3"
          src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
          alt={pelicula.title}
          style={{ width: "60%" }}
        />
        <Card.Body className="mx-3">
          <Card.Title>{pelicula.title}</Card.Title>
          <Card.Text className="mb-2 text-muted">{pelicula.overview}</Card.Text>
        </Card.Body>
      </Card>
    )
  );
};

export default TarjetaPeliculaPablo;
