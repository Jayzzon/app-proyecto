import React from 'react';
import Busqueda from "../../components/busqueda";
import Panel from '../../components/Panel';
import "./Home.css"
  const style={

  }

function Home() {
  return (
    <div className='fondo'>
        <Busqueda/>
        <Panel/>
    </div>
  )
}

export default Home;