const videogameCreate = require("../controllers/vgCreate");

const videogamePostHandler = async(req, res) => {
    try {
        const objVideoGame = req.body;       
        const newVideoGame = await videogameCreate(objVideoGame);

        res.status(201).json(newVideoGame);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = videogamePostHandler;