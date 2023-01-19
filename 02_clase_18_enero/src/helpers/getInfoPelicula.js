const getInfoPelicula = async (idPeli) => {
  const apikey = "8930572ca461d9b58d8f05f72d6f419a";
  const url = `https://api.themoviedb.org/3/movie/${idPeli}?&language=es-es&api_key=${apikey}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log("Data:", data);
  return data;
};

export default getInfoPelicula;
