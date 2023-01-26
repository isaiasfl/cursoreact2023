import React from "react";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const miError = useRouteError();
  console.log(miError);

  return (
    <>
      <div>
        <h1>Error {miError.status}</h1>
        <h3>Error {miError.statusText || miError.message}</h3>
      </div>
      <div>
        <Link to="/"> Volver al menu </Link>
      </div>
    </>
  );
};
export default Error;
