import { BrowserRouter } from "react-router-dom";
import Rutas from "./rutas/Rutas";
import RutasCliente from "./rutas/RutasClient";

//Toaster para mensajes Temporales
import { Toaster } from 'react-hot-toast';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Rutas />
        <RutasCliente/>
        <Toaster/>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
