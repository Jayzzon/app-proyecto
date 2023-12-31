import React, { useEffect, useState } from "react";
//import { refrescos } from "../../bd/datos";
import Axios from "../../services/Axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Card() {

  const [datos, setDatos]=useState([]);

  const urlImages="http://127.0.0.1:4000/images/"
  
  const Add = async () => {
        toast.success("producto añadido al carrito correctamente!!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        }
  const consultarDatos = async()=>{
    const consultar= await Axios.get("/producto/consultarProducto");
    setDatos(consultar.data);
    console.log(consultar);
  }

  useEffect(()=>{
    consultarDatos();
  },[])

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 row-cols-g-4">
        {
        datos.map((refresco) => {
          return (
            <div class="col p-3">
              <div class="card h-100">
                <img src={urlImages+refresco.image.filename} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{refresco.nombre}</h5>
                  <p class="card-text">{refresco.descripcion}</p>
                </div>
                <div
                  class="card-footer bg-transparent border-success"
                  align="right"
                >
                  <label for="floatingPlaintextInput">
                   Costo: ${refresco.precio}&nbsp;
                  </label>
                  <label for="floatingPlaintextInput">
                    Cantidad:{refresco.cantidad}&nbsp;
                  </label>
                  <button type="button" className="btn btn-outline-success">
                    <i className="bi bi-cart4" onClick={Add}></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}