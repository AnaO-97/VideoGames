const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Users', {
    id : {
        type            : DataTypes.INTEGER,            
        primaryKey      : true,           
        autoincremental : true
    },
    nombre: {
        type     : DataTypes.STRING,
        allowNull: false,
    },
    contrasena: {
        type     : DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type     : DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    timestamps : false,
  }
  );
};