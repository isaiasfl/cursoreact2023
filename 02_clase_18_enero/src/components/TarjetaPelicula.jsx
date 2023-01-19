import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import getInfoPelicula from "../helpers/getInfoPelicula";

const TarjetaPelicula = ({ idSeleccionado, setIdSeleccionado }) => {
  // --- estados ---
  const [info, setInfo] = useState({});
  // --- efectoso ---
  useEffect(() => {
    TraerInfoPelicula();
  }, [idSeleccionado]);

  // --- funciones ---
  const TraerInfoPelicula = () => {
    console.log("idSeleccionado", idSeleccionado.toString());
    idSeleccionado &&
      getInfoPelicula(idSeleccionado)
        .then((info) => setInfo(info))
        .catch((error) => console.error(error));
    setIdSeleccionado = false;
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
          variant="top"
          src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
          alt={info.title}
          style={{
            width: "60%",
          }}
        />
        <Card.Body className="mx-3">
          <Card.Title>{info.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {info.tagline}
          </Card.Subtitle>
          {info.overview}
        </Card.Body>
      </Card>
    )
  );
};

export default TarjetaPelicula;
