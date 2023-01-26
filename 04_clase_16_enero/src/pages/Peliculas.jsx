import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Peliculas = () => {
  const { peliculas } = useLoaderData();
  console.log(peliculas);
  return peliculas.map((pelicula) => (
    <li key={pelicula.id}>
      <Link to={`/infopeliculas/${pelicula.id}`}>{pelicula.title}</Link>
    </li>
  ));
};

export default Peliculas;

export const getMoviedb = async () => {
  const apikey = "8930572ca461d9b58d8f05f72d6f419a";
  const url =
    "https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=" +
    apikey;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const peliculas = data.results;
    return { peliculas: peliculas }; // return { peliculas }
  } catch (error) {
    console.error(error);
  }
};
