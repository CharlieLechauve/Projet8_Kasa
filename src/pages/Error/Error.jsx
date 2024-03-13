import React from "react";
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <>
      <div className="errorContainer">
        <p className="errorContainer__Number">404</p>
        <p className="errorContainer__Text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="errorContainer__Link">
          Retourner sur la page d'accueil
        </Link>
      </div>

    </>
  );
};

export default NoFound;
