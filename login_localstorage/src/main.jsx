import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cats from "./components/Cats.jsx";
import Error from "./components/Error.jsx";
import Login from "./components/Login.jsx";
import { InfoContextProvider } from "./contexts/contextLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "cats",
    element: <Cats />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <InfoContextProvider>
    <RouterProvider router={router} />
  </InfoContextProvider>
);
