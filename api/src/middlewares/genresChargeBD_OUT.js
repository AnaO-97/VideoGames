const genresCharge = require("../controllers/genresCharge");

const genresChargeBD_OUT = async (req, res, next) => {
    try {
        await genresCharge();                      
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    next();
}

module.exports = genresChargeBD_OUT;