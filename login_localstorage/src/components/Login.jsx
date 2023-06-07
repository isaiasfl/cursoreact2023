import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../contexts/contextLogin";
// --- declaración de variables ----
const EMAIL = "ifernandez@ieshlanz.es";
const PASSWORD = "1234";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // función que al pulsar en el formulario valida los datos escritos en el
    // formulario con las variables EMAIL u PASSWORD. (esto podría ser una petición
    // a una api o bd para hacer la consulta y traer los datos)
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if (emailValue === EMAIL && passwordValue === PASSWORD) {
      // SI EL EMAIL Y PASSWORD SON CORRECTOS LOS ALMACENO EN EL LOCALSTORAGE
      const datos = { email: EMAIL, password: PASSWORD };
      localStorage.setItem("datosUsuarioCorrecto", JSON.stringify(datos));
      // y después modifico el userLogin
      setUserLogin(true);
    }
  };
  // --- llamo al contexto global para poder tener el valor de userLogin
  const [userLogin, setUserLogin] = useContext(InfoContext);
  // la comprobación y redirección es conveniente hacerla en un efecto.. lo recomienda
  // en caso de que no lo ponganos en ese entorno.
  useEffect(() => {
    if (userLogin) {
      // si userLogin es true entonces salto a cats
      navigate("/cats");
    }
  }, [userLogin, navigate]);

  if (userLogin) {
    return null; // esto se coloca para que no renderice nada mientras salta a cats
  }
  // esto lo renderizará cuando no estén los datos correctamente en el localStorage
  // y por tanto userLogin esté a false.
  return (
    <>
      <div>
        <h2>Login</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" ref={email} />
          <input type="password" placeholder="password" ref={password} />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>
        <p>Los datos para realizar la prueba son:</p>
        <p>EMAIL = ifernandez@ieshlanz.es</p>
        <p>PASSWORD = 1234</p>
      </div>
    </>
  );
};

export default Login;
