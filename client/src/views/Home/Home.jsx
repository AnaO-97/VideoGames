import VideoGameContenedor from "../../components/components/VideoGameContenedor";

function Home () {
    return (
        <div>
            <h3>BIENVENIDO</h3>
            <VideoGameContenedor seccion = "onlyHome"/>            
            <hr />
            <VideoGameContenedor seccion = "allVideogames"/>
        </div>        
    );
}

export default Home;