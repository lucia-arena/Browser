import React, { useState } from "react";
import Error from "../Error";
import "./Formulario.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Formulario = ({ guardarBusqueda }) => {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagenes = e => {
    e.preventDefault();

    //validar
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //enviar el termino de búsqueda al componente principal
    guardarBusqueda(termino);
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg" id="buscador"
            placeholder="Introduce un término de búsqueda"
            onChange={e => guardarTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-warning btn-block" id="buscar"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
    </form>
  );
};

export default Formulario;
