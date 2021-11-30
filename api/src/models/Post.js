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
    // el id user deberia ser mediante tabla intermedia, cambié todo a true ara probar la db
    idUser: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    keywords: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  });
};
