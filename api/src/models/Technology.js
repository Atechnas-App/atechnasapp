const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('technology', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    technology: {
      type: DataTypes.STRING,
      allowNull: false,
  },

    // python: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // java: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // javaScript: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // C: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // PHP: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // typeScript: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // Swift: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // angular: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // C: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // groovy: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // assemblyLanguage: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // SQL: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },

    // swift: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // Go: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // prisma: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    // Ilustrator: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // Photoshop: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // Indesign: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // corelDraw: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // gravitDesigner: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // hubSpot: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // activeCampaign: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // klaviyo: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // mailchimp: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // marketo: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // pardot: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

    // omnisend: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //   },

  });
};
