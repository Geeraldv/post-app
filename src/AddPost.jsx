import React, { useState } from "react";
import { firestore } from "./config/firebase.js";
import "./AddPost.css";

function AddPost() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    firestore.collection("muroPost").add({
      Nombre: nombre,
      Apellido: apellido,
      Comentario: comentario,
    });
    setNombre("");
    setApellido("");
    setComentario("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          placeholder="Ingrese su apellido"
          value={apellido}
          onChange={(event) => setApellido(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="comentario">Comentario</label>
        <textarea
          className="form-control"
          id="comentario"
          rows="3"
          placeholder="Ingrese su comentario"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Publicar
      </button>
    </form>
  );
}

export default AddPost;
