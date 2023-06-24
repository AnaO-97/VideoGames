const { Genres }  = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

const genresCharge = async() =>{
    let arrayGenres = [];    
    const records  = await Genres.count();

    if(records === 0){            
        const auxi = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        ).data.results;
        
        auxi.map((genero)=>{
            arrayGenres.push({
                id     : genero.id,
                nombre : genero.name,
            })
        })

        arrayGenres.sort((a, b) => a.id - b.id);

        Genres.bulkCreate(
           arrayGenres,
           { fields  : ['id','nombre'] },
           {validate : true},
        );
       
        return arrayGenres;
    }   

    return arrayGenres;
};

module.exports = genresCharge;