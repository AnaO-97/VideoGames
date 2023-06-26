import style from "../styles/VGContenedor.module.css";
import VideoGame from "./VideoGame";
import { useSelector, useDispatch } from "react-redux";
import { limpiarEstado } from "../../redux/actions/actions"
import { useState } from "react";

const VideoGameContenedor = (props) => {
    const { seccion } = props;
    const dispatch    = useDispatch();
    const videogamesAll  = useSelector(state => state.videogamesAll);
    const videogamesHome = useSelector(state => state.videogamesHome);

    const [render, setRenderizar] = useState({
        estado : "",
        datos  : [],        
    });
   
    // (seccion === "allVideogames")
    // ? setRenderizar({
    //         estado : "videogamesAll",
    //         datos  : render.datos.concat(videogamesAll)
    //     })
    // : setRenderizar({
    //     estado : "videogamesHome",
    //     datos  : render.datos.concat(videogamesAll),
    // })

    const renderizar = (
        (seccion === "allVideogames")
        ? videogamesAll
        : videogamesHome
    );

    const estado = (
        (seccion === "allVideogames")
        ? "videogamesAll"
        : "videogamesHome"
    );
    
    const limpiarBTTHandler = ()=>{        
        dispatch(limpiarEstado(estado));
    }  

    return(
        <div>
        <button onClick = {()=>limpiarBTTHandler()}>
            LIMPIAR
        </button>

        <div className = {style.contenedorVG}>
            {renderizar.map((game) => {                
                return(
                    // <h4 key = { game.id }>nombre: {game.nombre}</h4>                    
                    <VideoGame  
                        key     = {game.id}                       
                        id      = {game.id}
                        imagen  = {game.imagen}
                        nombre  = {game.nombre}
                        generos     = {game.Genres}
                        plataformas = {game.plataformas}                        
                    />
                    
                )                
            })
            }
        </div>
        </div>        
    );
};

export default VideoGameContenedor;