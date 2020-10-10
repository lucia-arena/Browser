import React from "react";
import Imagen from "../Imagen";
import "./ListadoImagenes.css"

const ListadoImagenes = ({ imagenes }) => {
  return (
    <div className="col-12 p-5 row" id="resultado">
      {imagenes.map(imagen => (
        <Imagen key={imagen.id} imagen={imagen} />
      ))}
    </div>
  );
};

export default ListadoImagenes;
