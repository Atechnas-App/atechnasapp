const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("usersmp", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    acces_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    token_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    expires_in: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    scope: {
      type: DataTypes.STRING,
      allowNull: true,
    },


    refresh_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },


  });
};
