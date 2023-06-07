import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../contexts/contextLogin";

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
      <div>aquí aparecen las tarjetas Cats</div>;
      <button onClick={handleCloseSession}>Cerrar la sesión</button>
    </>
  );
};

export default Cats;
