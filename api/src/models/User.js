const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    company: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    profilePicture: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // languages: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    qualification: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    portfolio: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM("ACTIVO","BANEADO","EN REVISION"),
      allowNull: true,
    },

    access_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    token_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    expires_in: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    scope: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    refresh_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    public_key: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    live_mode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
};
