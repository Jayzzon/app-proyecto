import { Routes, Route } from "react-router-dom";

import AdminLayout from "../Layout/adminLayout/AdminLayout";
import HomeAdmin from "../paginas/admin/Home";
//import piePagina from "../components/piepagina";
import Editar from "../components/Editar";

function Rutas() {
  return (
   
      <AdminLayout>
        <Routes>
          <Route path="/admin/home" element={<HomeAdmin />} />
          <Route path="/admin/editar/:id" element={<Editar/>} />
        </Routes>
      </AdminLayout>
   
  );
}
export default Rutas;
