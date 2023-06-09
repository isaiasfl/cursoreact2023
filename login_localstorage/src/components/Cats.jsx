import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../contexts/contextLogin";
import GiphySearch from "./GiphySearch";

const Cats = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useContext(InfoContext);

  useEffect(() => {
    console.log("Estoy en useeffect de cats,userlogin: -> ", userLogin);
    if (!userLogin) {
      // si userLogin es false entonces salto a login
      navigate("/");
    }
  }, [userLogin, navigate]);

  if (!userLogin) {
    return null;
  }

  const handleCloseSession = () => {
    setUserLogin(false);
    localStorage.removeItem("datosUsuarioCorrecto");
  };
  return (
    <>
      <div className="text-center mt-3 mb-3">
        <h1>Buscador de gifs a través de Gitphy</h1>
      </div>
      <div className="text-end mb-5 mr-5">
        <Button variant="dark" onClick={handleCloseSession}>
          Cerrar la sesión
        </Button>
      </div>

      <div className="mt-3">
        <GiphySearch />
      </div>
    </>
  );
};

export default Cats;
