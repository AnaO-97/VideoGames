const axios = require ("axios");
const { API_KEY } = process.env;
const cleanDataBD_OUT = require("./cleanDataBD_OUT");

module.exports = async () => {
    let urlVideoGameBD_OUT = [];
    let videoGamesBD_OUT   = [];
    let pageApi            = 1;
    
    while(pageApi < 6){
        const auxi  = (await axios.get(
            `https://api.rawg.io/api/games?key=${API_KEY}&page=${pageApi}`)
        ).data.results;

        urlVideoGameBD_OUT = cleanDataBD_OUT(auxi)

        videoGamesBD_OUT = [
            ...videoGamesBD_OUT,
            ...urlVideoGameBD_OUT
        ];
        pageApi ++;
    }   
    
    return videoGamesBD_OUT;
};