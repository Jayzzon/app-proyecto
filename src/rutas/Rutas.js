import { Routes, Route } from "react-router-dom";

import AdminLayout from "../Layout/adminLayout/AdminLayout";
import HomeAdmin from "../paginas/admin/Home";
//import piePagina from "../components/piepagina";
import Editar from "../components/Editar";
import Cuenta from "../AdminCuenta/cuenta";

function Rutas() {
  return (
   
      <AdminLayout>
        <Routes>
          <Route path="/admin/home" element={<HomeAdmin />} />
          <Route path="/admin/editar/:id" element={<Editar/>} />
          <Route path="/admin/login" element={<Cuenta/>}/>
        </Routes>
      </AdminLayout>
   
  );
}
export default Rutas;
