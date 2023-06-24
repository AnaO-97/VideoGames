import style from "../styles/VG.module.css";
import { Link } from "react-router-dom";

const renderProp = (raw_array) =>{
    if(raw_array.length>0){   
        let keyx = 0;     
        return (
        <ul>
            {
                raw_array.map((genero)=>{  
                    keyx ++;                  
                    return (
                        typeof(genero)=== "object"
                        ? <li key={keyx}>{genero.nombre}</li>
                        : <li key={keyx}> {genero} </li>
                    )
                }) 
            }
        </ul>);      
    }
};

const VideoGame = (props) => {
    const {
        id, nombre, imagen,
        generos, plataformas
    } = props;

    return(
        <div key = {id}
             className = {style.videoGame}
        >
            <div  className = {style.id}>
                <h4> 
                    id:      {id}
                </h4>
            </div>
            
            <div className = {style.titulo}>
                <h4>
                        nombre:  {nombre}
                </h4>
            </div>
     
            <div>
                <img src = {imagen} 
                     alt = "XimagenX" 
                />
            </div>

            {/* <div className={style.seccionScroll}>
                <h4 className = {style.infoExtra}> 
                    generos: {renderProp(generos)}
                </h4>
            </div>
            
            <div className={style.seccionScroll}>
                <h4 className = {style.infoExtra}> 
                    plataformas: {renderProp(plataformas)}
                </h4>
            </div> */}
        </div>
    );
};

export default VideoGame;