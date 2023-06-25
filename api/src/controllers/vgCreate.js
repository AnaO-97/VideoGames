const { Videogame } = require("../db");

const videogameCreate = async (atributos) =>{
    const {
        nombre,           imagen,
        descripcion,      plataformas,
        fechaLanzamiento, rating,
        generos          
    } = atributos;

    const newVideoGame = await Videogame
        .create({
            nombre : nombre.toUpperCase(),           
            imagen,
            descripcion,      plataformas,
            fechaLanzamiento, rating,
        }
    );
    
    await newVideoGame.addGenres(generos);

    return newVideoGame
};

module.exports = videogameCreate;