import style from "../styles/VG.module.css";
import { Link } from "react-router-dom";

const renderProp = (raw_array) =>{
    if(raw_array.length>0){   
        let keyx = 0;     
        return (
        <ul>
            {raw_array.map((genero)=>{  
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

// const {
//     id, nombre, imagen,
//     generos, plataformas
// } = props;

const VideoGame = (props) => {
    const { videogame } = props;

    return(
        <Link to = {`videogame/detail/${videogame.id}`}>
        <div key       = {videogame.id}
             className = {style.videoGame}
        >
            <div  className = {style.id}>
                <h4> 
                    id:      {videogame.id}
                </h4>
            </div>
            
            <div className = {style.titulo}>
                <h4>
                        nombre:  {videogame.nombre}
                </h4>
            </div>
     
            <div>
                <img src = {videogame.imagen} 
                     alt = "XimagenX" 
                />
            </div>

            {/* <div className={style.seccionScroll}>
                <h4 className = {style.infoExtra}> 
                    generos: {renderProp(videogame.generos)}
                </h4>
            </div>
            
            <div className={style.seccionScroll}>
                <h4 className = {style.infoExtra}> 
                    plataformas: {renderProp(videogame.plataformas)}
                </h4>
            </div> */}
        </div>
        </Link>
    );
};

export default VideoGame;