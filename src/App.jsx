import { useState,useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});
  useEffect(()=>{
    
  },[paciente])

  return (
      <div className="container mx-auto m-20">
        <Header/>

        <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes} 
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}/>
        </div>
      </div>
  )
}

export default App
