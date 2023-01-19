const getMoviedb = async () => {
  const apikey = "8930572ca461d9b58d8f05f72d6f419a";
  const url =
    "https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=" +
    apikey;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getMoviedb;
