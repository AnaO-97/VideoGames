import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneVideogame } from "../../redux/actions/actions";

function Detail (props) {
    const { id } = props;

    const dispatch    = useDispatch();  
    const videogameId = useSelector((state) => state.videogameId);

    useEffect(()=>{
        dispatch (getOneVideogame(id));
    },[id]);

    return (
        <div>
            <h3>DETAIL: {videogameId.id}</h3>
            <h3>NOMBRE: {videogameId.nombre}</h3>
            <h5>DESCRIPCIÓN: {videogameId.descripcion}</h5>
        </div>        
    );
}

export default Detail;