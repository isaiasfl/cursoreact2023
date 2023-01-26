import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const InfoPeliculas = () => {
  // const { id } = useParams();
  const infoPelicula = useLoaderData();
  console.log(infoPelicula);
  return (
    <div className="container">
      <div className="card" style={{ width: "23rem" }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/original/${infoPelicula.poster_path}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="card-title">{infoPelicula.title}</div>
          <div className="card-subtitle text-muted">
            {infoPelicula.tagline}
            {infoPelicula.overview}
          </div>
        </div>
        <Link to={"/peliculas"} className="text-center mb-4">
          Volver a peliculas
        </Link>
      </div>
    </div>
  );
};

export default InfoPeliculas;

export const getInfoPelicula = async (idPeli) => {
  const apikey = "8930572ca461d9b58d8f05f72d6f419a";
  const url = `https://api.themoviedb.org/3/movie/${idPeli}?&language=es-es&api_key=${apikey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
