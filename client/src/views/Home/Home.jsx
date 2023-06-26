import VideoGameContenedor from "../../components/components/VideoGameContenedor";

function Home () {
    return (
        <div>
            <h3>BIENVENIDO</h3>
            <h5>SELECCIONADOS:</h5>
            <VideoGameContenedor seccion = "onlyHome"/>            
            <hr />
            <h5>TODOS:</h5>
            <VideoGameContenedor seccion = "allVideogames"/>
        </div>        
    );
}

export default Home;