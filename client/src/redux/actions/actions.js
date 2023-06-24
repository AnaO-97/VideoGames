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

const getIDAddHome = (idVG) => {
    return(async (dispatch) => {        
        const videogame = (await axios.get(`http://localhost:3001/videogames/${idVG}`)
        ).data;
                
        dispatch({
            type    : ACTION.GET_ADDATHOME,
            payload : videogame,
        })
    });
};

export {
    getVideogames,
    getIDAddHome
};