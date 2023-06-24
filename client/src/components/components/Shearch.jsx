import { useState } from "react";

function onSearch(idRecibido){
    let haveIt = false;

    for (const personaje of characters) {
       if(personaje.id === parseInt(idRecibido))
          bandera = true;       
    }
    
    if(!bandera){
       axios(`https://rickandmortyapi.com/api/character/${idRecibido}`).then(({ data }) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
       });
    }
    else
       window.alert('¡El personaje ya existe, intente con otro identificador!');   
}

const Search = (props) => {
   let [idBuscar, setIdBuscar] = useState("");

   const handleChange = (event) =>{
      const idIngresado = event.target.value;
      setIdBuscar(idIngresado);
   }

   return (
      <div>
         <input 
            type     = 'search'
            onChange = {handleChange}
            value    = {idBuscar}
         />         
         
         <button onClick={()=>onSearch(idBuscar)}>Agregar</button>
      </div>
   );
}

export default Search;