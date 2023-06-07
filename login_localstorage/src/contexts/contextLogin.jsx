import { createContext, useEffect, useState } from "react";
// --- declaración de variables ---
const EMAIL = "ifernandez@ieshlanz.es";
const PASSWORD = "1234";

export const InfoContext = createContext(null); // contexto

// --- creo el proveedor del contexto ----
export const InfoContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(false);

  // --- uso un efecto para traer los datos del localStorage. Es recomendable hacerlo
  // en un efecto o dará problemas.
  useEffect(() => {
    const datosGuardados = localStorage.getItem("datosUsuarioCorrecto");
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      const emailSave = datos.email;
      const passwordSave = datos.password;
      if (emailSave === EMAIL && passwordSave === PASSWORD) {
        setUserLogin(true);
      }
    }
  }, []);

  return (
    <InfoContext.Provider value={[userLogin, setUserLogin]}>
      {children}
    </InfoContext.Provider>
  );
};
