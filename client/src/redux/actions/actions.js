import axios from "axios";
import * as ACTION from "./actionsTypes";

const getVideogames = () => {
    return(async (dispatch) => {        
        const videogames = (await axios.get("http://localhost:3001/videogames")
        ).data;
                
        dispatch({
            type    : ACTION.GET_ALLVIDEOGAMES,
            payload : videogames,
        })
    });
};

const getOneVideogame = (idVideogame) => {
    return(async (dispatch) => {
        const videogame = (await axios.get(`http://localhost:3001/videogames/${idVideogame}`)
        ).data;       

        dispatch({
            type    : ACTION.GET_ONEVIDEOGAME,
            payload : videogame[0],
        })        
    });
}

const getNombreAddHome = (vgNombre) => {
    return(async (dispatch) => {        
        const videogame = (await axios.get(`http://localhost:3001/videogames/?nombre=${vgNombre}`)
        ).data;
                
        dispatch({
            type    : ACTION.GET_ADDATHOME,
            payload : videogame,
        })
    });
};

const limpiarEstado = (estado) => {    
    return({
       type    : ACTION.CLEAR_STATE,
       payload : estado, 
    });
}

export {
    getVideogames,
    getNombreAddHome,
    getOneVideogame,
    limpiarEstado
};