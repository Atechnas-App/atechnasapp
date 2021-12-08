const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('post', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    image: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },

    about: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    price: {
      type: DataTypes.REAL,
      allowNull: true,
    },

    paused: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }

  });
};
