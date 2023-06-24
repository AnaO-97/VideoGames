import VideoGameContenedor from "../../components/components/VideoGameContenedor";
import { getVideogames } from "../../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Home () {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getVideogames());
    },[]);
    
    return (
        <div>
            <h3>Home page</h3>
            <VideoGameContenedor />
        </div>        
    );
}

export default Home;