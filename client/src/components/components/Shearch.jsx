import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getNombreAddHome } from "../../redux/actions/actions";

const Search = () => {
   const dispatch = useDispatch();
      
   let [buscar, setBuscar] = useState({
      vgNombre : "",
      buscando : false,
   });   

   const agregadoCorrecto = useSelector(state => state.agregadoCorrecto)

   useEffect(()=>{
      if(buscar.buscando){
         agregadoCorrecto === 0
         ? window.alert('¡No hay videogames con esos caracteres!')
         : window.alert(`${agregadoCorrecto} ¡Videogames encontrados!`)
      }
      setBuscar({
         ...buscar,
         buscando : false,
      })
   },[agregadoCorrecto])

   const handleChange = (evento) =>{
      const nombre = evento.target.value;
      setBuscar({
         ...buscar,
         buscando : true,
         vgNombre : nombre,
      });
   }

   const todosBTTHandler = ()=>{
      dispatch(getVideogames());      
   };

   const buscarBTTHandler = ()=>{     
      dispatch(getNombreAddHome(buscar.vgNombre));
   };

   return (
   <div>
      <input 
         type     = 'search'
         onChange = {handleChange}
         value    = {buscar.vgNombre}
      />         
      
      <button onClick={()=>buscarBTTHandler()}>
         BUSCAR
      </button>

      <button onClick={()=>todosBTTHandler()}>
         TODOS
      </button>
   </div>      
   );
}

export default Search;