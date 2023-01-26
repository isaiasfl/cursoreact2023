import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import InfoPeliculas, { getInfoPelicula } from "../pages/InfoPeliculas";
import Peliculas, { getMoviedb } from "../pages/Peliculas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/peliculas", element: <Peliculas />, loader: getMoviedb },
      { path: "/about", element: <About /> },
      // { path: "/infopeliculas", element: <InfoPeliculas /> },
      {
        path: "/infopeliculas/:id",
        element: <InfoPeliculas />,
        loader: ({ params }) => getInfoPelicula(params.id),
      },
    ],
  },
]);
