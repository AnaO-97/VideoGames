import style from "../styles/VGContenedor.module.css";
import VideoGame from "./VideoGame";
import { useSelector } from "react-redux";

const VideoGameContenedor = () => {
    const videogamesAll = useSelector(state => state.videogamesAll)

    return(
        <div className = {style.contenedorVG}>
            {videogamesAll.map((game) => {                
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
    );
};

export default VideoGameContenedor;