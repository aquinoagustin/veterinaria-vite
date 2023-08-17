import { useState,useEffect } from "react"


export default function Formulario() {
  const [nombre,setNombre] = useState();
  const [propietario,setPropietario] = useState();
  const [email,setEmail] = useState();
  const [fecha,setFecha] = useState();
  const [sintomas,setSintomas] = useState();
  const [error,setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)
  }
  return (
    <div className="md:w1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

    <form 
    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
    onSubmit={handleSubmit}
    >
      {error && <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"><p>Todos los campos son obligatorios</p></div>}
      <div className="mb-5">
        <label htmlFor="mascota"
        className="block text-gray-700 uppercase font-bold"
        >Nombre Mascota</label>
        <input 
        onChange={(e) => setNombre(e.target.value)}
        id="mascota"
        type="text" placeholder="Nombre de la Mascota" 
        className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="propietario"
        className="block text-gray-700 uppercase font-bold" 
        >Nombre Propietario</label>
        <input 
        onChange={(e)=>setPropietario(e.target.value)}
        id="propietario"
        type="text" placeholder="Nombre del Propietario" 
        className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email"
        className="block text-gray-700 uppercase font-bold"
        >Email</label>
        <input 
        onChange={(e)=>setEmail(e.target.value)}
        id="email"
        type="email" placeholder="Email contacto propietario" 
        className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="alta"
        className="block text-gray-700 uppercase font-bold"
        >Fecha</label>
        <input 
        onChange={(e)=>setFecha(e.target.value)}
        id="alta"
        type="date"
        className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="sintomas"
        className="block text-gray-700 uppercase font-bold"
        >Sintomas</label>
        <textarea 
        onChange={(e)=>setSintomas(e.target.value)}
        id="sintomas" 
        className="text-gray-400 border-2 w-full p-2 mt-2 rounded-md"
        placeholder="Describe los Sintoma"/>
      </div>
      <input type="submit"
      className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all "
      defaultValue='Agregar Paciente' 
      />
    </form>


    </div>
  )
}
