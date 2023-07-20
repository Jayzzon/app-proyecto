import React, { useState } from 'react';
import "./Usercuenta.css";
import Axios from '../services/Axios';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const Cuenta = () => {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const [valores, setValores] = useState(initialValues);

  const obtenerVariables = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
  };

  const Enviar = (e) => {
    e.preventDefault();
    console.log(valores);
    Guardar();
    setValores(initialValues); // Reiniciar los valores del formulario
  };

  const Guardar = async () => {
    toast.success("Perfil creado correctamente!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    const guardar = await Axios.post("/login", valores); /* aqui va la direcion de la api resp   ("/", valores) */
  };

  return (
    <div className="signup-form">
      <h2>Crear cuenta</h2>
      <form onSubmit={Enviar}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingrese su usuario"
            value={valores.username}
            onChange={obtenerVariables}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
            value={valores.email}
            onChange={obtenerVariables}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={valores.password}
            onChange={obtenerVariables}
          />
        </div>
        <button type="submit" onClick={Guardar}>Crear cuenta</button>
      </form>
    </div>
  );
};

export default Cuenta;
