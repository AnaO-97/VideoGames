const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id : {      
      type         : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      primaryKey   : true,
    },
    nombre : {
      type      : DataTypes.STRING,
      allowNull : false,
    },
    imagen : {
      type         : DataTypes.STRING, 
      // defaultValue : imgDefault,
    },
    descripcion : {
      type      : DataTypes.STRING,
      allowNull : false,
    },
    plataformas : {
      type      : DataTypes.ARRAY(DataTypes.STRING),
      allowNull : false,
    },
    fechaLanzamiento : {
      type      : DataTypes.DATE,
      allowNull : false,
    },
    rating : {
      type      : DataTypes.FLOAT,
      allowNull : false,
    },
    vgMine : {
      type         : DataTypes.BOOLEAN,
      defaultValue : true,
    }
  },
  {
    timestamps : false,
  });
};
