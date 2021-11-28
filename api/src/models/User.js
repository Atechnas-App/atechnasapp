const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
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

    category: {
      type: DataTypes.ENUM("developer", "designer", "marketing", "recruiter"),
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

    premium: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

  });
};
