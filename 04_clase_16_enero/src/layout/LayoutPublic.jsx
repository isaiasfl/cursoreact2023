import React from "react";
import { Outlet } from "react-router-dom";
import NavEjemplo from "../components/NavEjemplo";

const LayoutPublic = () => {
  return (
    <>
      <NavEjemplo> Menu </NavEjemplo>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">Footer</footer>
    </>
  );
};

export default LayoutPublic;
