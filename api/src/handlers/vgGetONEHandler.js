const videogameGetONEHandler = async(req, res) =>{
    try {
        const idVideogame = req.params;
        res.status(200).json(idVideogame);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = videogameGetONEHandler;