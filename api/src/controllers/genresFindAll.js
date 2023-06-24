const { Genres } = require("../db");

const genresFindAll = async() =>{
    const genresDB_MINE = await Genres.findAll();

    return genresDB_MINE;
};

module.exports = genresFindAll;