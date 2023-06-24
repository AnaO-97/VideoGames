const genresFindAll = require("../controllers/genresFindAll");

const genresGetHandler = async(req, res) => {
    try {
        let genres = await genresFindAll();      
        
        genres.length === 0
        ? res.status(200).json({vacio: "No existen registros/genres en la BD"})
        : res.status(200).json(genres);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = genresGetHandler;